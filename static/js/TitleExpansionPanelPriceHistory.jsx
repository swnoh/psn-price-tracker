import React from "react";
import { Row, Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PriceChart from "./PriceChart";

const formatData = dataUnformatted => {
  let dataFormatted = [];
  if (typeof dataUnformatted === "undefined") return;

  for (let i = 0; i < dataUnformatted.length; i++) {
    var data = {};
    data["x"] = dataUnformatted[i]["date"];
    data["y"] = dataUnformatted[i]["price"];
    dataFormatted[i] = data;
  }
  return dataFormatted;
};

class TitleExpansionPanelPriceHistory extends React.Component {
  render() {
    const { gameItem, itemPrice, selectedGameID } = this.props;

    return (
      <React.Fragment>
        <Row className="price-history-chart">
          <PriceChart
            selectedGameID={selectedGameID}
            game_id={this.props.itemPrice.game_id}
            chartPrices={formatData(itemPrice.chartPrices)}
            chartBonusPrices={formatData(itemPrice.chartBonusPrices)}
          />
        </Row>
        <Row className="row-price-table">
          <Col xs={4} className="price-table">
            <h5>Highest Price</h5>
            <h2 className="highest-price">
              {this.props.itemPrice.highest_price == null
                ? "-"
                : this.props.itemPrice.highest_price}
            </h2>
          </Col>
          <Col xs={4} className="price-table">
            <h5>Lowest Price</h5>
            <h2 className="lowest-price">
              {this.props.itemPrice.lowest_price == null
                ? "-"
                : this.props.itemPrice.lowest_price}
            </h2>
          </Col>
          <Col xs={4} className="price-table">
            <h5>Lowest PS+ Price</h5>
            <h2 className="lowest-plus-price">
              {this.props.itemPrice.plus_lowest_price == null
                ? "-"
                : this.props.itemPrice.plus_lowest_price}
            </h2>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default TitleExpansionPanelPriceHistory;
