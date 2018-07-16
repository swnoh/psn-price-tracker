import React from "react";
import { Row, Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PriceChart from "./PriceChart";

class TitleExpansionPanelPriceHistory extends React.Component {
  render() {
    const { titleItem, selectedTitleID } = this.props;

    const selectedTitleItem = titleItem.titleItem.filter(
      item => item.id === selectedTitleID
    )[0];

    return (
      <Col
        xs={12}
        md={4}
        lg={8}
        className="col-expansion-panel col-price-chart"
      >
        <Row>
          <PriceChart priceData={selectedTitleItem.priceData} />
        </Row>
        <Row className="row-price-table">
          <Col xs={4} className="price-table">
            <h5>Highest Price</h5>
            <h2 className="highest-price">$89.99</h2>
          </Col>
          <Col xs={4} className="price-table">
            <h5>Lowest Price</h5>
            <h2 className="lowest-price">$49.99</h2>
          </Col>
          <Col xs={4} className="price-table">
            <h5>Lowest PS+ Price</h5>
            <h2 className="lowest-plus-price">$39.99</h2>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default TitleExpansionPanelPriceHistory;
