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
              "https://apollo2.dl.playstation.net/cdn/UP9000/CUSA02299_00/FREE_CONTENTaF5vcf6gJ2FyFca5zoIj/PREVIEW_SCREENSHOT6_164001.jpg"
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
