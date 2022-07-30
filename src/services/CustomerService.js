import axios from "axios";

class CustomerService {
    baseURL = "http://localhost:8080/backEnd/api/v1/";

    registerCustomer = async (data) => {
        console.log("data",data)
        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}customer`, data)
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
            axios.put(`${this.baseURL}/customer`, data)
                .then((res) => {

                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    };


    fetchPendingCustomers= async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get(`${this.baseURL}/customer/pending`)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

    deleteCustomer= async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete(`${this.baseURL}/customer`, {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };
}

export default new CustomerService()