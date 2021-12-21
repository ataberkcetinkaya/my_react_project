import React, { useState, useEffect } from 'react'
import { Button, Icon, Menu, Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CarService from '../services/carService'
import { useDispatch } from 'react-redux'
import { rentTheCar } from '../store/actions/rentActions'
import { toast } from 'react-toastify'

export default function CarList() {

    const dispatch = useDispatch()

    const [cars, setCars] = useState([]) //Destructure (elimizdeki array'in değerlerini değişkenlere atamak istediğimiz zaman.)
        //cars gelecek dataya karşılık, setCars ise reactHook.. ve bu datanın default değeri boş bir array 'useState([])
            //cars kısmını değiştirmek için setCars'ı kullanırız. işte o react-hook. (lifecycle hook)

        //cars kısmı gelen data ile değiştiği anda sayfa yeniden render ediliyor ve return yeniden başlıyor.


    useEffect(() => { //component yüklendiğinde yapılmasını istediğimiz kodu buranın içerisine yazariz.
        let carService = new CarService()
        carService.getCars().then((result) => setCars(result.data.data))
    }, [])        //.then ile başarılı olursa demek.. setCars ile cars'ı set edebiliriz.
                    //result.data.data yazmamızın nedeni axios tüm data infoyu çeker biz onu bir nevi kısaltıyoruz.
                    //enson kısımda virgülden sonra '[]' boş array vermemizin nedeni api'ye sonsuz isteği kesmek

    const handleAddToRent = (car) => {
        dispatch(rentTheCar(car))
        toast.success(`${car.carName} chosen!`)
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Category ID</Table.HeaderCell>
                        <Table.HeaderCell>Car ID</Table.HeaderCell>
                        <Table.HeaderCell>Car Name</Table.HeaderCell>
                        <Table.HeaderCell>Fuel</Table.HeaderCell>
                        <Table.HeaderCell>Price (€)</Table.HeaderCell>
                        <Table.HeaderCell>Stock</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {cars.map((car) => ( //destructure ettiğimiz için burada cars'a ulaşabiliyoruz.
                                        //react mapping yaptığımız yerlerde key değeri ister.
                        <Table.Row key={car.id}> 
                            <Table.Cell>{car.category.categoryId}</Table.Cell>
                            <Table.Cell>{car.id}</Table.Cell>
                            <Table.Cell><Link to={`/cars/${car.carName}`}>{car.carName}</Link></Table.Cell>
                            <Table.Cell>{car.fuelType}</Table.Cell>
                            <Table.Cell>{car.unitPrice}</Table.Cell>
                            <Table.Cell>{car.unitsInStock}</Table.Cell>
                            <Table.Cell><Button onClick = {() => handleAddToRent(car)}>Rent Now</Button></Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
