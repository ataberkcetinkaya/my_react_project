import React, {useState} from 'react'
import { Container, Menu } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import TotalSummary from './TotalSummary'
import { useSelector } from 'react-redux'

export default function Navi() {
    
    const { rentWorks } = useSelector(state => state.rent)
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

                        {rentWorks.length>0&&<TotalSummary/>}
                        {isAuthenticated?<SignedIn signOut={handleSignOut} smthng="1"> </SignedIn>:<SignedOut signIn={handleSignIn}></SignedOut>}
                    
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
