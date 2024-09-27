import { gameManager } from "./store";



export function startLogger(){
    setInterval(() => {
        gameManager.logGame();
    }, 5000)
}  