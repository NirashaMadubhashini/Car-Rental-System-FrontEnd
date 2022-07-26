import axios from "axios";

class DriverService {
    baseURL = "http://localhost:8080/backEnd/api/v1/";

    addDriver = async (data) => {

        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}admin/driver`, data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    putDriver = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put(`${this.baseURL}admin/driver`, data, {
            })
                .then((res) => {

                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    fetchDriver = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get(`${this.baseURL}admin/driver`)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }
}

export default new DriverService()