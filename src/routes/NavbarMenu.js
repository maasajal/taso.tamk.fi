
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiFacebook, FiInstagram } from "react-icons/fi";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useTranslation } from 'react-i18next';


// Contains the value and text for the options
const languages = [
    { value: 'en', text: "English" },
    { value: 'fi', text: "Finnish" },
    { value: 'sv', text: "Swedish" }
  ]


function NavbarMenu() {

   // It is a hook imported from 'react-i18next'
   const { t } = useTranslation();

   const [lang, setLang] = useState('en');

   const handleChange = e => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }

    return(
        <div className="menu">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="TASO-logo.png" alt="TASO logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">{t('home')}</Nav.Link>
                            <Nav.Link href="membership">{t('membership')}</Nav.Link>
                            <Nav.Link href="news">{t('news')}</Nav.Link>
                            <Nav.Link href="proceedings">{t('proceedings')}</Nav.Link>
                            <Nav.Link href="advances">{t('advances')}</Nav.Link>
                            <Nav.Link href="contact">{t('contact')}</Nav.Link>
                            <Nav.Link href="partners">{t('partners')}</Nav.Link>
                        </Nav>
                        <Nav>
                            <select value={lang} onChange={handleChange}>
                                {languages.map(item => {
                                    return (<option key={item.value}
                                    value={item.value}>{item.text}</option>);
                                })}
                            </select>
                            <Nav.Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Ftasory_ig%3Figshid%3DYmMyMTA2M2Y%253D%26fbclid%3DIwAR1mO5dIyoMi0GZqvMkLWzhgFrjG5hTDE6UsyCXVz9ZHCk7GnWIIDjaQauU&h=AT1BcFJxWeBoN9g_GfnM4CZReWyJ25uqy-WAVP9SaDGcIjGDOinAAj5SkTNhmsDzLMmbasuFiiMfvLtCCDWbXX3JAX54rsGQcu51o3pLLw21mncHpnB1mxCQ6S3FdHDGUzGMCA" target="_blank">
                            <FiInstagram />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="https://www.facebook.com/tampereensahkoopiskelijat/" target="_blank">
                            <FiFacebook />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default NavbarMenu;
