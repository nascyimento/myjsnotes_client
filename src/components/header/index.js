import { Container, Navbar } from "rbx";
import "rbx/index.css";
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.png';
import '../../styles/header.scss';

const Header = (props) => {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img loading='lazy' src={logoImg} alt="Evernote Logo" />
                    </Link>
                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                                <Link to={props.link} className="button is-outlined is-custom-purple">{props.authOption}</Link>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar>
    );
}

export { Header };

