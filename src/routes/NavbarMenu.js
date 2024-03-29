
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FiFacebook, FiInstagram, FiUser } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const changeLanguage = (ln) => {
    return ()=> {
        i18n.changeLanguage(ln);
    }
}

function NavbarMenu() {
    const { t } = useTranslation();
   // It is a hook imported from 'react-i18next'

    return(
        <div className="menu">
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src="TASO-logo.png" alt="TASO logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">{t('nav1')}</Nav.Link>
                            <Nav.Link href="/membership">{t('nav2')}</Nav.Link>
                            <Nav.Link href="/news">{t('nav3')}</Nav.Link>
                            <Nav.Link href="/proceedings">{t('nav4')}</Nav.Link>
                            <Nav.Link href="/advances">{t('nav5')}</Nav.Link>
                            <Nav.Link href="/contact">{t('nav6')}</Nav.Link>
                            <Nav.Link href="/partners">{t('nav7')}</Nav.Link>
                        </Nav>
                        <Nav className="languageChangeButton">
                            <Nav.Link><button onClick={changeLanguage("en")}>EN</button></Nav.Link>
                            <Nav.Link>/</Nav.Link>
                            <Nav.Link><button onClick={changeLanguage("fi")}>FI</button></Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="login" title="Admin login. user id and password required"><FiUser /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com/tasory_ig/" title="Visit our instagram page" target="_blank">
                                <FiInstagram />
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="https://www.facebook.com/tampereensahkoopiskelijat/" title="Visit our facebook page" target="_blank">
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
