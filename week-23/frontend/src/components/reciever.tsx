import { useEffect, useState } from "react";

export default function Reciever() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [pc, setPC] = useState<RTCPeerConnection | null>(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    setSocket(socket);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({
          type: "reciever",
        })
      );
    };

    socket.onmessage = async (event) => {
        const message = JSON.parse(event.data);
        if(message.type === 'createOffer'){
            const pc = new RTCPeerConnection();
            setPC(pc);
            await pc.setRemoteDescription(message.sdp);
            pc.onicecandidate = (event) => {
                if(event.candidate){
                    socket?.send(JSON.stringify({type: "iceCandidate", candidate: event.candidate}))
                }
            }
            const answer = await pc.createAnswer();
            await pc.setLocalDescription(answer);
            socket.send(JSON.stringify({type: "createAnswer", sdp: pc.localDescription}));
        }

        if(message.type === 'iceCandidate'){
            pc?.addIceCandidate(message.candidate)
        }
    }
    
  }, []);
  return <div>Reciever</div>;
}
