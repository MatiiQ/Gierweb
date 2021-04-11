import http from './appHttp';

class LibraryService {
	public getLibrary(params?: any) {
	  //return http.get('62fbf740', params);
	  //return all pairs of IDs for a game and user
	  //heroku
	  return http.get('gamesUsers', params);
	}
}

const libraryService = new LibraryService();
export default libraryService;