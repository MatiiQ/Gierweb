import axios, { AxiosInstance } from 'axios';

class HttpApiClient {
	private _http: AxiosInstance;

	constructor() {
		this._http = axios.create({
			httpsAgent: {
				rejectUnauthorized: false,
			},
			//heroku
			baseURL: 'https://gier-web.herokuapp.com/',
			headers: {
				'Content-Type': 'application/json'
			}
		});
	}
	public get(route: string, params?: any): Promise<any> {
		return this._http.get(route, {params});
	}
}

const http = new HttpApiClient();

export default http;