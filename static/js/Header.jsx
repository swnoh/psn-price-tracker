import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button
} from "react-bootstrap";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      navbarTransparent: true
    };
  }

  listenScrollEvent = e => {
    e.preventDefault();
    if (window.scrollY >= 100) {
      this.setState({
        navbarTransparent: false
      });
    } else {
      this.setState({
        navbarTransparent: true
      });
    }
  };

  componentWillUnmount(newProps) {
    window.removeEventListener("scroll", this.listenScrollEvent);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Navbar
        inverse
        collapseOnSelect
        fixedTop
        navbar-transparent
        className={this.state.navbarTransparent ? "navbar-transparent" : null}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand" style={{ "padding-top": "8px" }}>
              <img
                src="https://store.playstation.com//img/store-logo.svg"
                style={{ height: "35px" }}
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {/* <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown> */}
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
            <Button type="submit" bsStyle="link">
              <i
                class="fa fa-search"
                aria-hidden="true"
                style={{ "font-size": "1.5em" }}
              />
            </Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
