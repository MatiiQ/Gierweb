import http from './appHttp';

class GameIdService {
	public getGame(gameId: number) {
	  //return http.get('62fbf740', params);
	  //return game with given ID
	  //heroku
	  return http.get(`games/${gameId}`);
	}
}

const gameIdService = new GameIdService();
export default gameIdService;