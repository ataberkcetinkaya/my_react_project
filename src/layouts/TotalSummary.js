import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'

export default function TotalSummary() {
    return (
        <div>
            <Dropdown item text='Selected Car/s'>
                <Dropdown.Menu>
                    <Dropdown.Item>BMW 320i</Dropdown.Item>
                    <Dropdown.Item>Audi A3 Sedan</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/rent">Checkout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
