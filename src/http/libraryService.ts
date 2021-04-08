import http from './appHttp';

class UserService {
	public getLibrary(params?: any) {
	  //return http.get('62fbf740', params);
	  //return http.get('game_user-U?', params);
	  //heroku
	  return http.get('gamesUsers/user/', params);
	}
}

const userService = new UserService();
export default userService;