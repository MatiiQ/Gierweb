import http from './appHttp';

class GameGenreService {
	public getGame(genre: string) {
	  //return http.get('62fbf740', params);
	  //return games with given genre
	  //heroku
	  return http.get(`/games/genres/${genre}`);
	}
}

const gameGenreService = new GameGenreService();
export default gameGenreService;