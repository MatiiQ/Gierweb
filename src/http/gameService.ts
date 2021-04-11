import http from './appHttp';

class GameService {
	public getGame(params?: any) {
	  //return http.get('62fbf740', params);
	  //return all games
	  //heroku
	  return http.get('games', params);
	}
}

const gameService = new GameService();
export default gameService;