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
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      navbarTransparent: true,
      showSearchBar: false
    };
  }

  handleSearch = e => {
    this.props.history.push("/search?q=" + e.target.value);
  };

  listenScrollEvent = e => {
    e.preventDefault();
    if (window.scrollY >= 30) {
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

  componentDidUpdate(Prev) {
    if (this.props.location.pathname !== "/search" && this.input) {
      this.input.value = "";
    }
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
            <NavLink to="/">
              <img
                src="https://store.playstation.com//img/store-logo.svg"
                style={{ height: "35px" }}
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            <CSSTransition
              in={this.state.showSearchBar}
              timeout={500}
              classNames="searchbar"
              unmountOnExit
            >
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  onChange={this.handleSearch}
                  inputRef={ref => {
                    this.input = ref;
                  }}
                />
              </FormGroup>
            </CSSTransition>
            <Button
              bsStyle="link"
              style={{ outlineColor: "transparent" }}
              onClick={() =>
                this.setState({ showSearchBar: !this.state.showSearchBar })
              }
            >
              <i
                className="fa fa-search"
                aria-hidden="true"
                style={{ fontSize: "1.5em" }}
              />
            </Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

// export default Header;
export default withRouter(Header);
