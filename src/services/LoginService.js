import axios from "axios";

class LoginService {
    baseURL = "http://localhost:8080/backEnd/api/v1/";

    loginUser = async (data) => {

        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}login`, data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }
}

export default new LoginService()