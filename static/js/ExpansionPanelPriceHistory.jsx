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

class ExpansionPanelPriceHistory extends React.Component {
  render() {
    const { itemPrice, selectedGameID } = this.props;

    return (
      <React.Fragment>
        <Row className="price-history-chart">
          <PriceChart
            selectedGameID={selectedGameID}
            game_id={itemPrice.game_id}
            chartPrices={formatData(itemPrice.chartPrices)}
            chartBonusPrices={formatData(itemPrice.chartBonusPrices)}
          />
        </Row>
        <Row className="row-price-table">
          <Col xs={4} className="price-table">
            <h5>Highest Price</h5>
            <h2 className="highest-price">
              {itemPrice.highest_price < 0 ? "-" : itemPrice.highest_price}
            </h2>
          </Col>
          <Col xs={4} className="price-table">
            <h5>Lowest Price</h5>
            <h2 className="lowest-price">
              {itemPrice.lowest_price < 0 ? "-" : itemPrice.lowest_price}
            </h2>
          </Col>
          <Col xs={4} className="price-table">
            <h5>Lowest PS+ Price</h5>
            <h2 className="lowest-plus-price">
              {itemPrice.plus_lowest_price < 0
                ? "-"
                : itemPrice.plus_lowest_price}
            </h2>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ExpansionPanelPriceHistory;
