import http from './appHttp';

class LibraryUserService {
	public getLibrary(userId: number) {
	  //return http.get('62fbf740', params);
	  //return pairs of IDs for game and specified user (what games that user has)
	  //heroku
	  return http.get(`gamesUsers/user/${userId}`);
	}
}

const libraryUserService = new LibraryUserService();
export default libraryUserService;