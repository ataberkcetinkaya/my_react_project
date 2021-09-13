import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={signIn}>Login</Button>
                <Button primary style={{marginLeft:"1.8mm"}}>Register</Button>
            </Menu.Item>
        </div>
    )
}
