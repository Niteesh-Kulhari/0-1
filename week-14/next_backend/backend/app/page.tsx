import axios from "axios";
import Image from "next/image";


async function getUserDetails() {
  //await new Promise((r) => setTimeout(r, 5000)) artificail delay
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}


export default async function Home() {
  const userDetails = await getUserDetails();


  return (
    <div>
      Hi there
      <br />
      {userDetails.name}
      <br />
      {userDetails.email}
    </div>
  );
}
