export const RENT_THE_CAR = "RENT_THE_CAR"
export const CANCEL_THE_CAR = "CANCEL_THE_CAR"

export function rentTheCar(car) {
    return {
        type : RENT_THE_CAR,
        payload : car
    }
}

export function cancelTheCar(car) {
    return {
        type : CANCEL_THE_CAR,
        payload : car
    }
}