import http from './appHttp';

class UserService {
	public getUser(params?: any) {
	  //return http.get('62fbf740', params);
	  //return http.get('usersGamesWeb.json?', params);
	  //heroku
	  return http.get('users', params);
	}
}

const userService = new UserService();
export default userService;