import React, {useState} from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import TotalSummary from './TotalSummary'

export default function Navi() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />

                    <Menu.Menu position='right'>

                        <TotalSummary></TotalSummary>
                        {isAuthenticated?<SignedIn></SignedIn>:<SignedOut></SignedOut>}
                    
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
