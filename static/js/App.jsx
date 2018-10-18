import React from 'react';
import { Transition } from 'react-transition-group';
import { Grid, Row } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HashRouter, Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './Common/components/Header';
import Footer from './Common/components/Footer';
import ScrollToTop from './Common/components/ScrollToTop';

import MainBanner from './Main/containers/MainBanner';
import MainCategoryQuick from './Main/containers/MainCategoryQuick';
import MainCategoryAll from './Main/containers/MainCategoryAll';
import MainSearchPage from './Main/containers/MainSearchPage';
import '../css/styles.css';

const duration = 300;

const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  transform: 'scale(1.5)',
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1, transform: 'scale(1)' }
};

export default class App extends React.Component {
  state = {
    showTransition: false,
    isImgLoaded: false
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

    if (this.props.slideChunk !== slideChunk)
      this.props.setSlideChunk(slideChunk);
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentDidMount() {
    this.handleResize();
    this.props.fetchBanner();

    this.setState({ showTransition: true });
    window.addEventListener('resize', this.handleResize);
  }

  render() {
    const { backgroundImgUrls } = this.props;

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
                !this.state.isImgLoaded ? { opacity: '0' } : backgroundImgStyle
              }
            >
              {this.state.isImgLoaded && (
                <Route exact path="/" component={MainBanner} />
              )}
              <img
                style={{ display: 'none' }}
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
                      <MainCategoryQuick match={props.match} />
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
                            fontSize: '3em',
                            fontWeight: 'bold',
                            color: 'rgba(255, 255, 255, 0.5)',
                            paddingTop: '250px',
                            minWidth: '700px'
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
                  component={props => <MainCategoryAll match={props.match} />}
                />
                <Route
                  exact
                  path="/search"
                  component={props => (
                    <MainSearchPage location={props.location} />
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
