import { startLogger } from "./logger"
import { GameManage, gameManager } from "./store"

startLogger();


setInterval(() =>{
    gameManager.addGame(Math.random().toString());
}, 5000)