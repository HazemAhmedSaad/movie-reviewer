import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import changeLanguage from "../store/actions";
function NavScrollExample() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const language = useSelector((state) => state.lang);
  const myDispatcher = useDispatch();
  const toggleLanguage = () => {
    myDispatcher(changeLanguage(language === "en-US" ? "ar-SA" : "en-US"));
  };
  const counter = useSelector((state) => state.counter);

  return (
    <Navbar expand="lg" className="  navbar-dark bg-dark">
      <Container fluid className="mx-5">
        <Navbar.Brand>The Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to={"./"} className={"nav-link"}>
              Movies
            </NavLink>
            <NavLink to={"./series"} className={"nav-link"}>
              Series
            </NavLink>{" "}
            <NavLink to={"./favorite"} className={"nav-link"}>
              Favorites ({counter})
            </NavLink>
            {/* <NavLink to={"./search"} className={"nav-link"}>Search</NavLink> */}
            {/* <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item >
                <NavLink to={"./"} className={"nav-link text-dark"}>
                  Popular
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <NavLink to={"./"} className={"nav-link text-dark"}>
                  Popular
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => handleChange(e)}
            />
            <Link
              variant="outline-success "
              className="btn btn-success"
              to={`/search/${searchValue}`}
            >
              Search
            </Link>
          </Form>
          <Button
            variant="light"
            className="ms-4 rounded-circle text-center"
            style={{ width: "45px", height: "45px" }}
            onClick={toggleLanguage}
          >
            {language === "en-US" ? "AR" : "EN"}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
