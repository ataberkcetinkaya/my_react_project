import React from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
    return (
        <div>
            <Menu pointing vertical>
                <Menu.Item
                    as={NavLink} to="/" name='Home'
                />
                <Menu.Item
                    as={NavLink} to="/cars" name='Cars'
                />
                <Menu.Item
                    name='locations'
                />
            </Menu>
        </div>
    )
}
