import axios from "axios";

class AdminService {

    baseURL = "http://localhost:8080/backEnd/api/v1/";

    addCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}admin/car`, data)
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise
    }

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

    putCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put(`${this.baseURL}admin/car`, data)
                .then((res) => {

                    return resolve(res)
                })
                .catch((er) => {
                    return resolve(er)
                })
        })
        return await promise;
    };

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

    putCustomerDetail = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put(`${this.baseURL}admin/customer`, data, {
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



    deleteCar = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete(`${this.baseURL}admin/car`, {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    deleteDriver = async (params) => {
        const promise = new Promise((resolve, reject) => {
            axios.delete(`${this.baseURL}admin/driver`, {params: params})
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };

    customerAccept = async (type,nicNo) => {
        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}admin/req/accept/${type}/${nicNo}`)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    };


    fetchCar = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get(`${this.baseURL}admin/car`)
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        })
        return await promise;
    }

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

    searchCustomer= async (nicNo) => {
        const promise = new Promise((resolve, reject) => {
            axios.get(`${this.baseURL}admin/customer ${nicNo}`)
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

export default new AdminService()