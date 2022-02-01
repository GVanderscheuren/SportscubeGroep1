import axios from 'axios';

const API_URL = 'https://sportscubeapp.azurewebsites.net/api/LoginAdmin?code=1&clientId=Default';

class AuthService {
  async login(user) {
    return axios
      .post(API_URL, {
        Naam: user.Naam,
        Wachtwoord: user.Wachtwoord
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }
}

export default new AuthService();