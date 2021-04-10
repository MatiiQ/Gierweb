import http from './appHttp';

class UserService {
	public getLibrary(userId: number) {
	  //return http.get('62fbf740', params);
	  //return http.get('game_user-U?', params);
	  //heroku
	  return http.get(`gamesUsers/user/${userId}`);
	}
}

const userService = new UserService();
export default userService;