import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://sportscubeapp.azurewebsites.net/api/GetAdmin?code=1&clientId=Default';

class UserService {
  getAdminBoard() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

export default new UserService();