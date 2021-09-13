import React, {useState} from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import TotalSummary from './TotalSummary'

export default function Navi() {
    
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const history = useHistory() //const değişken

    function handleSignOut(params) {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(params) {
        setIsAuthenticated(true)
    }
    
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item
                        as={NavLink} to="/" name='home'
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
