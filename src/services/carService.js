import axios from "axios"

export default class CarService {
    getCars() {
        return axios.get("http://localhost:8080/api/cars/getall")
    }

    getByCarName(carName) {
        return axios.get("http://localhost:8080/api/cars/getByCarName?carName=" + carName)
    }
}