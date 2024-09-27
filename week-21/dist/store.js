"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManage = void 0;
//export const games: Game[] = [];
class GameManage {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstace() {
        if (GameManage.instance) {
            return GameManage.instance;
        }
        GameManage.instance = new GameManage();
        return GameManage.instance;
    }
    addMoves(gameId, move) {
        const game = this.games.find(game => game.id == gameId);
        if (game) {
            game.moves.push(move);
        }
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayer: "Alice",
            blackPlayer: "Denzel",
            moves: []
        };
        this.games.push(game);
    }
    logGame() {
        // this.games.forEach(game => {
        //     console.log(game);
        // });
        console.log(this.games);
    }
}
exports.GameManage = GameManage;
exports.gameManager = GameManage.getInstace();
