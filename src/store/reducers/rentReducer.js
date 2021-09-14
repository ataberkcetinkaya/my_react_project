import { CANCEL_THE_CAR } from "../actions/rentActions";
import { RENT_THE_CAR } from "../actions/rentActions";
import { rentWorks } from "../initialValues/rentWorks";

const initialState = {
    rentWorks : rentWorks
}

export default function rentReducer(state = initialState, {type, payload}) {
    switch (type) {
        case RENT_THE_CAR:
            let car = state.rentWorks.find(r => r.car.id  === payload.id)
            if (car) {
                car.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    rentWorks: [...state.rentWorks, {quantity:1, car:payload}]
                }
            }

            case CANCEL_THE_CAR:
                return{
                    ...state,
                    rentWorks: state.rentWorks.filter( r => r.car.id !== payload.car.id)
                }
        default:
            return state;
    }
}