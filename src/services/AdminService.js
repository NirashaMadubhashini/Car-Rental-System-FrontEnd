import axios from "axios";

class AdminService {

    baseURL = "http://localhost:8080/backEnd/api/v1/";

    addCar = async (data) => {
        console.log("form data: " + data)

        const initialValues = {
            registrationNO: "sadf",
            brand: "tf",
            type: "ds",
            noOfPassengers: 5,
            transmissionType: "sds",
            fuelType: "fg",
            color: "esssssss",
            frontViewImg: "add",
            backViewImg: "dad",
            sideViewImg: "ada",
            internalViewImg: "fggggg",
            dailyRate: "eee",
            monthlyRate: "hg",
            freeKmForPrice: "fs",
            freeKmForDuration: "sds",
            priceForExtraKm: "aaad",
            /**
             * Exta data
             * */
            id: 0,
            lossDamageWaiver: "",
            completeKm: "",
            isAvailable: "",


        };
        const promise = new Promise((resolve, reject) => {
            axios.post(`${this.baseURL}admin/car`, initialValues,{
                headers: {
                    accept: 'application/json',
                    'accept-language': 'en_US',
                    'content-type': 'application/x-www-form-urlencoded'
                },
            })
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

    putCar = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.put(`${this.baseURL}admin/car`, data, {
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

}

export default new AdminService()