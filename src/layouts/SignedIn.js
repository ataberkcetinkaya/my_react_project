import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu, Image } from 'semantic-ui-react'
import Messages from '../pages/Messages'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
            <Menu.Item
                   onClick={Messages} name='Messages'
                />
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1469781160158973955/AY_VyprZ_400x400.jpg"></Image>
                <Dropdown pointing="top" text="Ataberk Ç.">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Info" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Log Out" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
