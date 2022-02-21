import axios from "axios";

class LoginDataService {
  addLogin(login) {
    return axios.post(`http://localhost:8080/addLogin/`, login);
  }

  // extra functionality for possible future login management

    retrieveAllLogin() {
      return axios.get(`http://localhost:8080/retrieveAllLogin`);
    }

  //   deleteLogin(id) {
  //     return axios.delete(`http://localhost:8080/deleteLogin/${id}`);
  //   }

  //   updateLogin(login) {
  //     return axios.put(`http://localhost:8080/updateLogin/`, login);
  //   }
}
export default new LoginDataService();
