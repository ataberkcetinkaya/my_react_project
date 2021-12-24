import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'
import CarService from '../services/carService'

export default function CarDetail() {

    let { name } = useParams() //parametreleri obje olarak verir. id:id,
    // id1.id2'de olabilirdi. yani ör. {id, categoryId}
    //Dashboard.js içindeki <Route kısmında

    const [car, setCar] = useState({}); //ilk değeri boş obje {}

    useEffect(() => {
        let carService = new CarService()
        carService.getByCarName(name).then((result) => setCar(result.data.data))
    }, []);
    //CarList'ten kopyaladıklarımızın aynısı. Kodun notları için oraya bak.

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            //floated
                            size='small'
                            src=''
                        />
                        <Card.Header>{car.carName}</Card.Header>
                        <Card.Meta>{car.fuelType}</Card.Meta>
                        <Card.Description>
                            Price: <strong>{car.unitPrice}</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}