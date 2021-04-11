import http from './appHttp';

class UserIdService {
	public getUser(userId: number) {
	  //return http.get('62fbf740', params);
	  //return user with specified ID
	  //heroku
	  return http.get(`/users/${userId}`);
	}
}

const userIdService = new UserIdService();
export default userIdService;