import http from './appHttp';

class UserGenderService {
	public getUser(userGender: string) {
	  //return http.get('62fbf740', params);
	  //return users with specified gender
	  //heroku
	  return http.get(`/users/gender/${userGender}`);
	}
}

const userGenderService = new UserGenderService();
export default userGenderService;