import React from "react";
import { Navbar, FormGroup, FormControl, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

class Header extends React.Component {
  state = {
    navbarTransparent: true,
    showSearchBar: false
  };

  handleSearch = e => {
    this.props.history.push("/search?q=" + e.target.value);
  };

  listenScrollEvent = () => {
    let navbarTransparent;

    if (window.scrollY >= 30) navbarTransparent = false;
    else navbarTransparent = true;

    if (navbarTransparent !== this.state.navbarTransparent) {
      this.setState({
        navbarTransparent: navbarTransparent
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
        className={this.state.navbarTransparent ? "navbar-transparent" : null}
      >
        <Navbar.Header>
          <Navbar.Brand>
            <NavLink to="/">
              <img src="https://store.playstation.com//img/store-logo.svg" />
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
                  autoFocus
                  type="text"
                  placeholder="Search Title"
                  onChange={this.handleSearch}
                  inputRef={ref => {
                    this.input = ref;
                  }}
                  style={
                    this.state.navbarTransparent
                      ? {
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "rgba(0, 0, 0, 0.5)"
                        }
                      : {
                          fontWeight: "bold"
                        }
                  }
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
              <i className="fa fa-search" aria-hidden="true" />
            </Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
