import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut() {
    return (
        <div>
            <Menu.Item>
                <Button primary>Login</Button>
                <Button primary style={{marginLeft:"1.8mm"}}>Register</Button>
            </Menu.Item>
        </div>
    )
}