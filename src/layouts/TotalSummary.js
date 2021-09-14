import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label,  } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function TotalSummary() {

    const { rentWorks } = useSelector(state => state.rent)

    return (
        <div>
            <Dropdown item text='Selected Car/s'>
                <Dropdown.Menu>
                    {
                        rentWorks.map((rentWorks) => (
                            <Dropdown.Item key={rentWorks.car.id}>
                                {rentWorks.car.carName}
                                <Label>
                                    {rentWorks.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/rent">Checkout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
