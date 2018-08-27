import React from "react";
import Header from "./Header";
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

const SITE_URL = "http://psntracker.azurewebsites.net";

export default class App extends React.Component {
  state = {
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
    else if (window.innerWidth > baseWidth - baseImg * 6) slideChunk = 3;
    else slideChunk = 2;

    if (this.state.slideChunk !== slideChunk)
      this.setState({ slideChunk: slideChunk });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    fetch(`${SITE_URL}/api/psn/banner`)
      .then(response => response.json())
      .then(data => {
        this.setState({ backgroundImgUrls: data.bannerBackgroundUrl });
      });
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
              <Route exact path="/" component={MainBanner} />
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
                ) : null}
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
