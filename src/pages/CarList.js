import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import CarService from '../services/carService'

export default function CarList() {

    const [cars, setCars] = useState([])

    useEffect(() => {
        let carService = new CarService()
        carService.getCars().then((result) => setCars(result.data.data))
    })

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Car ID</Table.HeaderCell>
                        <Table.HeaderCell>Car Category ID</Table.HeaderCell>
                        <Table.HeaderCell>Car Name</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Stock</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {cars.map((car) => (
                        <Table.Row>
                            <Table.Cell>{car.id}</Table.Cell>
                            <Table.Cell>{car.categoryId}</Table.Cell>
                            <Table.Cell>{car.carName}</Table.Cell>
                            <Table.Cell>{car.unitPrice}</Table.Cell>
                            <Table.Cell>{car.unitsInStock}</Table.Cell>
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
