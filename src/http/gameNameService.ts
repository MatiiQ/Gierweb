import http from './appHttp';

class GameNameService {
	public getGame(name: string) {
	  //return http.get('62fbf740', params);
	  //return game with given name
	  //heroku
	  return http.get(`/games/find/${name}`);
	}
}

const gameNameService = new GameNameService();
export default gameNameService;