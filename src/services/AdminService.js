import axios from "axios";

class AdminService {

    addCar = async (data) => {
        console.log("form data: " + data)
        const promise = new Promise((resolve, reject) => {
            axios.post('admin/car', data)   //10s
                .then((res) => {
                    return resolve(res)
                })
                .catch((er) => {
                    console.log('error: ' + er);
                    return resolve(er)
                })
        })
        return await promise
    }

    putCustomer = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put('admin/car', data)
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

export default new AdminService()