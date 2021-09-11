import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn() {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1435709545758826501/JRPdjDFs_400x400.jpg"></Image>
                <Dropdown pointing="top" text="Berk">
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Info" icon="info"/>
                        <Dropdown.Item text="Log Out" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
