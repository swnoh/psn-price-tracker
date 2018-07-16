import React from "react";
import Header from "./Header";
import MainFeature from "./MainFeature";
import MainWrapper from "./MainWrapper";
import "./styles.css";
import { Grid, Row } from "react-bootstrap";
export default class App extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <Header />
        </Row>
        <Row
          className="main-feature"
          style={{
            backgroundImage: `url(
              "https://apollo2.dl.playstation.net/cdn/UP0001/CUSA02902_00/FREE_CONTENTVOymPFjjncAWFcbYEbIP/PREVIEW_SCREENSHOT2_133731.jpg"
            )`
          }}
        >
          <MainFeature />
        </Row>
        <Row>
          <MainWrapper />
        </Row>
      </Grid>
    );
  }
}
