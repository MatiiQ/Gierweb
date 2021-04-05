import http from './appHttp';

class UserService {
	public getUser(params?: any) {
	  return http.get('62fbf740', params);
	}
}

const userService = new UserService();
export default userService;