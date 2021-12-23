import React, { useState } from 'react'
import { Container, Menu, Dropdown } from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router'
import TotalSummary from './TotalSummary'
import { useSelector } from 'react-redux'

export default function Navi() {

    const { rentWorks } = useSelector(state => state.rent)
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    //setIsAuthenticated'ı kullanarak, isAuthenticated değiştirebiliriz. Bu sayede çıkış yap/giriş yap'a basınca kullanıcıyı yönlendirebiliriz.

    const history = useHistory() //const değişken

    function handleSignOut(params) {
        setIsAuthenticated(false) //kullanıcı handleSignOut ile çıkış yapınca true değeri false'a çekeriz.
        history.push("/")         //alt-component'e fonksiyon yollariz. (yani handleSignOut'u)
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
                    
                    {/* 
                        DAHA SONRA EKLENECEK OZELLIKLER

                    <Menu.Menu position='right'>
                        <Menu.Item vertical>
                            <Dropdown item text='Languages'>
                                <Dropdown.Menu>
                                    <Dropdown.Item>English</Dropdown.Item>
                                    <Dropdown.Item>Turkish</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </Menu.Menu> */}

                    <Menu.Menu position='right'>

                        {rentWorks.length > 0 && <TotalSummary />}
                        {isAuthenticated ? <SignedIn signOut={handleSignOut} smthng="1"> </SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut>}

                    </Menu.Menu>
                </Container>
            </Menu>
        </div>          //{isAuthenticated? satiri için;  : (ikinokta'nın anlami değilse demek) (yani yukaridaki satirin anlamı; kişi authenticate ise signedIn'i  ve
    )                   //onun içinde signOut adında bir fonksiyon varmış gibi {handleSignOut}'u tetikliyor,
}                       //değilse signedOut'u ve içerisindeki signIn fonksiyonunu ve tetikleyicisi olan {handleSignIn}'i göster.

                        //  signOut={handleSignOut} kısmında verdiğimiz signOut değerini diğer component sayfalarinda kullanabiliriz.
                        // örn; SignedIn içerisindeki ''<Dropdown.Item onClick={signOut} text="Log Out" icon="sign-out"/>'' kısmında
