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
import { HashRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const mainBackgroundImage = {
  backgroundImage: `url(
      "https://apollo2.dl.playstation.net/cdn/UP1477/CUSA07022_00/FREE_CONTENTSM4qUEXYckBPnnAnxhvj/PREVIEW_SCREENSHOT2_153277.png"
    )`
};
//https://apollo2.dl.playstation.net/cdn/UP0006/CUSA08724_00/FREE_CONTENToQIMNNW75HcxC310D2pk/PREVIEW_SCREENSHOT8_165567.jpg
//https://apollo2.dl.playstation.net/cdn/UP9000/CUSA02299_00/FREE_CONTENTaF5vcf6gJ2FyFca5zoIj/PREVIEW_SCREENSHOT6_164001.jpg
//https://apollo2.dl.playstation.net/cdn/UP0006/CUSA10038_00/FREE_CONTENTrTcFqBk8oI1z05VGnC9f/PREVIEW_SCREENSHOT1_167281.jpg
//https://apollo2.dl.playstation.net/cdn/UP0002/CUSA05969_00/FREE_CONTENTv66N8XMUSL6w2Ig1xTfx/PREVIEW_SCREENSHOT1_165073.jpg
//https://apollo2.dl.playstation.net/cdn/UP0006/CUSA08006_00/FREE_CONTENTFcK5FdjUK5Top2t7SRqv/PREVIEW_SCREENSHOT5_151250.jpg
//https://apollo2.dl.playstation.net/cdn/UP9000/CUSA03220_00/FREE_CONTENTZ8tbU2ebGUo8oaL0CZKt/PREVIEW_SCREENSHOT7_116713.jpg
//https://apollo2.dl.playstation.net/cdn/UP1477/CUSA07022_00/FREE_CONTENTSM4qUEXYckBPnnAnxhvj/PREVIEW_SCREENSHOT2_153277.png

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <Grid fluid className="main-grid">
            <Row>
              <Header />
            </Row>
            <Row className="main-feature" style={mainBackgroundImage}>
              <Route exact path="/" component={MainBanner} />
            </Row>
            <Row className="row-content">
              <Switch>
                <Route
                  exact
                  path="/"
                  component={props => <MainCategoryQuick match={props.match} />}
                />
                <Route
                  exact
                  path="/category/:name"
                  component={props => <MainCategoryAll match={props.match} />}
                />
                <Route exact path="/search" component={MainSearchPage} />
              </Switch>
            </Row>{" "}
            <Row>
              <Footer />
            </Row>
          </Grid>
        </ScrollToTop>
      </HashRouter>
    );
  }
}
