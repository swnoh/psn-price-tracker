import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col, Button } from "react-bootstrap";
import PriceChart from "./PriceChart";
import Rating from "react-rating";
import ExpansionPanelHeader from "./ExpansionPanelHeader";
import ExpansionPanelInfo from "./ExpansionPanelInfo";
import ExpansionPanelPriceHistory from "./ExpansionPanelPriceHistory";
import ExpansionPanelMedia from "./ExpansionPanelMedia";
import ExpansionPanelDescription from "./ExpansionPanelDescription";

class ExpansionPanel extends React.Component {
  state = {
    isPanelPriceHistory: true,
    isPanelMedia: false,
    isPanelDescription: false
  };

  handlePanel = event => {
    switch (event.target.text) {
      case "Price History":
        this.setState({
          isPanelPriceHistory: true,
          isPanelMedia: false,
          isPanelDescription: false
        });
        break;
      case "Media":
        this.setState({
          isPanelPriceHistory: false,
          isPanelMedia: true,
          isPanelDescription: false
        });
        break;
      case "Description":
        this.setState({
          isPanelPriceHistory: false,
          isPanelMedia: false,
          isPanelDescription: true
        });
        break;
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.selectedGameID !== prevProps.selectedGameID) {
      this.setState({
        isPanelPriceHistory: true,
        isPanelMedia: false,
        isPanelDescription: false
      });
    }
  }

  render() {
    const {
      handleExpansion,
      showExpansionPanel,
      gameItem,
      gameItemApiData,
      isGameItemApiData,
      itemPrice,
      isItemPrice,
      selectedRowID,
      selectedGameID,
      slideChunk
    } = this.props;

    const {
      isPanelPriceHistory,
      isPanelMedia,
      isPanelDescription
    } = this.state;

    let selectedGameItem = gameItem.gameItem.filter(
      item => item.game_id === selectedGameID
    )[0];

    if (selectedGameItem === undefined) {
      selectedGameItem = gameItem.gameItem[0];
    }

    const mediaPreview =
      gameItemApiData.mediaList && gameItemApiData.mediaList.previews;
    const mediaScreenshot =
      gameItemApiData.mediaList && gameItemApiData.mediaList.screenshots;

    return (
      <Grid className="container-expansion">
        <div
          className="expansion-background"
          style={
            mediaScreenshot !== undefined
              ? { backgroundImage: `url(${mediaScreenshot[0].url}) ` }
              : {
                  backgroundImage: `url("https://www.solidbackgrounds.com/images/2560x1440/2560x1440-black-solid-color-background.jpg"`
                }
          }
        />
        <ExpansionPanelHeader
          game_title={selectedGameItem.game_title}
          isPanelMedia={isPanelMedia}
          isPanelDescription={isPanelDescription}
          handleExpansion={handleExpansion}
          selectedRowID={selectedRowID}
          selectedGameID={selectedGameID}
          slideChunk={slideChunk}
        />
        <Row>
          <Col className="col-title-info" xs={12} md={4} lg={3}>
            <ExpansionPanelInfo
              gameItemApiData={gameItemApiData}
              selectedGameItem={selectedGameItem}
              isPanelMedia={isPanelMedia}
              isPanelDescription={isPanelDescription}
              slideChunk={slideChunk}
            />
          </Col>
          {isPanelPriceHistory &&
            isItemPrice && (
              <Col
                xs={12}
                md={8}
                lg={8}
                className="col-expansion-panel col-expansion-price"
              >
                <ExpansionPanelPriceHistory
                  itemPrice={itemPrice}
                  selectedGameID={selectedGameID}
                />
              </Col>
            )}
          {isPanelMedia && (
            <Col
              xs={12}
              md={8}
              lg={8}
              className="col-expansion-panel col-expansion-media"
            >
              {isPanelMedia ? (
                <ExpansionPanelMedia gameItemApiData={gameItemApiData} />
              ) : null}
            </Col>
          )}
          {isPanelDescription && (
            <Col
              xs={12}
              md={8}
              lg={8}
              className="col-expansion-panel col-expansion-description"
            >
              <ExpansionPanelDescription gameItemApiData={gameItemApiData} />
            </Col>
          )}
        </Row>
        <Row className="expansion-menu">
          <ul>
            <li className={isPanelPriceHistory ? "current" : ""}>
              <a onClick={this.handlePanel}>Price History</a>
              <span />
            </li>
            {mediaPreview !== undefined && mediaScreenshot !== undefined ? (
              <li className={isPanelMedia ? "current" : ""}>
                <a onClick={this.handlePanel}>Media</a>
                <span />
              </li>
            ) : null}

            <li className={isPanelDescription ? "current" : ""}>
              <a onClick={this.handlePanel}>Description</a>
              <span />
            </li>
          </ul>
        </Row>
      </Grid>
    );
  }
}

export default ExpansionPanel;
