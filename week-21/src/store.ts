
interface Game {
    id: string,
    whitePlayer: string,
    blackPlayer: string,
    moves: string[];
}

//export const games: Game[] = [];

export class GameManage{
    private static instance: GameManage;
    private games: Game[] = [];

    private constructor(){
        this.games = [];
    }

    static getInstace(){
        if(GameManage.instance){
            return GameManage.instance
        }

        GameManage.instance = new GameManage();
        return GameManage.instance;
    }



    addMoves(gameId: string, move: string){
        const game = this.games.find(game => game.id == gameId);
        if(game){
            game.moves.push(move);
        }
    }

    addGame(gameId: string){
        const game = {
            id: gameId,
            whitePlayer: "Alice",
            blackPlayer: "Denzel",
            moves: []
        }
        this.games.push(game)
    }

    logGame(){
        // this.games.forEach(game => {
        //     console.log(game);
        // });
        console.log(this.games);
    }
}

export const gameManager = GameManage.getInstace();