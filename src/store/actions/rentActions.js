export const RENT_THE_CAR = "RENT_THE_CAR" //reducers içinde de ayni isimle kullanma olayı?! Magic String'den kurtuluyoruz - Tekrar tekrar kullanırken string olarak "RENT_THE_CAR" yazmayalım diye
export const CANCEL_THE_CAR = "CANCEL_THE_CAR"

export function rentTheCar(car) { //rentTheCar isminde bir aksiyon, ve parametremiz araba, araba gönderiyoruz
    return {
        type : RENT_THE_CAR,  //redux der ki; bir aksiyon yaptığımızda bana bir obje gönder
        payload : car         //ve bu objenin içerisinde bu aksiyonun ismi olsun, yani bilmek ister neyi çalıştaracağını ona type diyoruz
    }                         //yani aslında aksiyonumuza bir isim veriyoruz ve bu da 'reducers' içinde RENT_THE_CAR aksiyonun
}                             //hangi stateleri etkilediğini bulacak.
                              //ve bir şey eklemek istiyoruz ama ne ekleyeceğiz o da payload:car > arabayi ekliyoruz (payload: state'i etkileyecek olan veri)

export function cancelTheCar(car) {
    return {
        type : CANCEL_THE_CAR,
        payload : car
    }
}