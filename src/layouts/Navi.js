import React, {useState} from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import TotalSummary from './TotalSummary'

export default function Navi() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut(params) {
        setIsAuthenticated(false)
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }
    
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
                        {isAuthenticated?<SignedIn signOut={handleSignOut} smthng="1"> </SignedIn>:<SignedOut signIn={handleSignIn}></SignedOut>}
                    
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
