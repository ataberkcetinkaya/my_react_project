import { CANCEL_THE_CAR } from "../actions/rentActions";
import { RENT_THE_CAR } from "../actions/rentActions";
import { rentWorks } from "../initialValues/rentWorks";

const initialState = {
    rentWorks : rentWorks  //default değer buradaki const değişkeninden geliyor
} //sol taraf bizim verdiğimiz isim
//sağ taraf bir yerde tanımlı değişken (temiz kod)

//reducer: sepetin son halini tuttuğumuz yer, peki neye göre? gönderdiğimiz aksiyona göre.

                            //default değeri veriyoruz (initialState)
export default function rentReducer(state = initialState, {type, payload}) {
    switch (type) {                                      //ve aksiyonu veriyoruz. obje göndeririz
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