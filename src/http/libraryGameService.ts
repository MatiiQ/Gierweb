import http from './appHttp';

class LibraryGameService {
	public getLibrary(gameId: number) {
	  //return http.get('62fbf740', params);
	  //return pairs of IDs for specified game and user (which users have that game)
	  //heroku
	  return http.get(`gamesUsers/game/${gameId}`);
	}
}

const libraryGameService = new LibraryGameService();
export default libraryGameService;