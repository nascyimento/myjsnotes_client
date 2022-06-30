import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Dropdown, Navbar } from "rbx";
import "rbx/index.css";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/logo-white.png";
import UsersService from "../../services/users";
import "../../styles/header.scss";

const HeaderLogged = (props) => {
  let userName = JSON.parse(localStorage.getItem("user"));
  userName = userName["name"];

  const logOut = async () => {
    await UsersService.logout();
  };

  const removeStyles = () => {
    document.body.style = "";
    document.querySelector("html").style = "";
  };

  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Container>
        <Navbar.Brand>
          <Link to="/notes">
            <img loading="lazy" src={logoImg} alt="JavaScript Notes Logo" />
          </Link>
          <Navbar.Burger>
            className="navbar-burger burger" aria-label="menu"
            aria-expanded="false" data-target="navbar-menu"
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Navbar.Burger>
        </Navbar.Brand>
        <Navbar.Menu>
          <Navbar.Segment
            as="div"
            className="navbar-item navbar-end"
            align="right"
          >
            <Navbar.Item as="div">
              <Button
                className="open-button"
                color="white"
                outlined
                onClick={() => {
                  document
                    .querySelector(".navbar-menu")
                    .classList.remove("is-active");
                  document
                    .querySelector(".navbar-burger")
                    .classList.remove("is-active");
                  props.setIsOpen(!props.isOpen);
                }}
              >
                <FontAwesomeIcon icon={faList} />
              </Button>
            </Navbar.Item>
            <Navbar.Item as="div">
              <Dropdown>
                <Dropdown.Trigger>
                  <Button className="button" color="white" outlined>
                    <span>{userName} ▼</span>
                  </Button>
                </Dropdown.Trigger>
                <Dropdown.Menu>
                  <Dropdown.Content>
                    <Dropdown.Item as="div">
                      <Link to="/user/edit" onClick={removeStyles}>
                        Edit User
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as="div">
                      <Link
                        to="/login"
                        onClick={() => {
                          removeStyles();
                          logOut();
                        }}
                      >
                        Log out
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Content>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Item>
          </Navbar.Segment>
        </Navbar.Menu>
      </Container>
    </Navbar>
  );
};

export { HeaderLogged };
