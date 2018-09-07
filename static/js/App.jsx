import React from "react";
import Header from "./Header";
import { Transition } from "react-transition-group";
import MainBanner from "./MainBanner";
import MainCategoryQuick from "./MainCategoryQuick";
import MainCategoryAll from "./MainCategoryAll";
import MainSearchPage from "./MainSearchPage";
import Footer from "./Footer";
import "./styles.css";
import { Grid, Row } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { HashRouter, Switch, Route, BrowserRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const SITE_URL = "https://psntracker.azurewebsites.net";

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  transform: "scale(1.5)",
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1, transform: "scale(1)" }
};

export default class App extends React.Component {
  state = {
    showTransition: false,
    backgroundImgUrls: "",
    isImgLoaded: false,
    slideChunk: 10
  };

  handleResize = () => {
    const baseWidth = 1904;
    const baseImg = 175.5;
    let slideChunk = 10;

    if (window.innerWidth > baseWidth - baseImg * 0) slideChunk = 10;
    else if (window.innerWidth > baseWidth - baseImg * 1) slideChunk = 9;
    else if (window.innerWidth > baseWidth - baseImg * 2) slideChunk = 8;
    else if (window.innerWidth > baseWidth - baseImg * 3) slideChunk = 7;
    else if (window.innerWidth > baseWidth - baseImg * 4) slideChunk = 6;
    else if (window.innerWidth > baseWidth - baseImg * 5) slideChunk = 5;
    else if (window.innerWidth > 991) slideChunk = 4;
    else slideChunk = 3;

    if (this.state.slideChunk !== slideChunk)
      this.setState({ slideChunk: slideChunk });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidMount() {
    this.setState({ showTransition: true });
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    fetch(`${SITE_URL}/api/psn/banner`)
      .then(response => response.json())
      .then(data => {
        this.setState({ backgroundImgUrls: data.bannerBackgroundUrl });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { backgroundImgUrls } = this.state;

    const backgroundImgUrl =
      backgroundImgUrls[Math.floor(Math.random() * backgroundImgUrls.length)];

    const backgroundImgStyle = {
      transition: `opacity 1000ms ease-in-out`,
      backgroundImage: `url(${backgroundImgUrl})`,
      opacity: 1
    };

    return (
      <BrowserRouter>
        <ScrollToTop>
          <Grid fluid className="main-grid">
            <Row>
              <Header />
            </Row>
            <Row
              className="main-feature"
              style={
                !this.state.isImgLoaded ? { opacity: "0" } : backgroundImgStyle
              }
            >
              {this.state.isImgLoaded && (
                <Route exact path="/" component={MainBanner} />
              )}
              <img
                style={{ display: "none" }}
                src={backgroundImgUrl}
                onLoad={() => {
                  this.setState({
                    isImgLoaded: true
                  });
                }}
              />
            </Row>
            <Row className="row-content">
              <Switch>
                {this.state.isImgLoaded ? (
                  <Route
                    exact
                    path="/"
                    component={props => (
                      <MainCategoryQuick
                        match={props.match}
                        slideChunk={this.state.slideChunk}
                      />
                    )}
                  />
                ) : (
                  <Transition in={this.state.showTransition} timeout={duration}>
                    {state => (
                      <div
                        style={{
                          ...defaultStyle,
                          ...transitionStyles[state]
                        }}
                      >
                        <p
                          style={{
                            fontSize: "3em",
                            fontWeight: "bold",
                            color: "rgba(255, 255, 255, 0.5)",
                            paddingTop: "250px",
                            minWidth: "700px"
                          }}
                        >
                          Playstation Store Price Tracker Loading...
                        </p>
                      </div>
                    )}
                  </Transition>
                )}
                <Route
                  exact
                  path="/category/:name"
                  component={props => (
                    <MainCategoryAll
                      match={props.match}
                      slideChunk={this.state.slideChunk}
                    />
                  )}
                />
                <Route
                  exact
                  path="/search"
                  component={props => (
                    <MainSearchPage
                      location={props.location}
                      slideChunk={this.state.slideChunk}
                    />
                  )}
                />
              </Switch>
            </Row>
            <Row>
              <Footer />
            </Row>
          </Grid>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}
