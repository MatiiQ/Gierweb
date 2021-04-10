import http from './appHttp';

class UserService {
	public getGame(gameId: number) {
	  //return http.get('62fbf740', params);
	  //return http.get('game_user-U?', params);
	  //heroku
	  return http.get(`games/${gameId}`);
	}
}

const userService = new UserService();
export default userService;