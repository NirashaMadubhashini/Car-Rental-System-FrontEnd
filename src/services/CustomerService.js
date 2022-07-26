import axios from "axios";

class CustomerService {
    baseURL = "http://localhost:8080/backEnd/api/v1/";

    addCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}customer/customer`, data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

    putCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put(`${this.baseURL}customer/customer`, data, {
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

    fetchCustomer = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get(`${this.baseURL}customer/customer`)
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

export default new CustomerService()