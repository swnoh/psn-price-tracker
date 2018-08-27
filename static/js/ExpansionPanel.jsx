import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    isPanelDescription: false,
    isImgLoaded: false
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
        isPanelDescription: false,
        isImgLoaded: false
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
      selectedGameID
    } = this.props;

    const {
      isPanelPriceHistory,
      isPanelMedia,
      isPanelDescription,
      isImgLoaded
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

    const backgroundImgUrl =
      mediaScreenshot !== undefined ? mediaScreenshot[0].url : "";
    const backgroundImgStyle = {
      transition: `opacity 1000ms ease-in-out`,
      backgroundImage: `url(${backgroundImgUrl})`
    };

    return (
      <Grid className="container-expansion">
        <div
          className="expansion-background"
          style={
            !this.state.isImgLoaded ? { opacity: "0" } : backgroundImgStyle
          }
        />
        <img
          style={{ display: "none" }}
          src={backgroundImgUrl}
          onLoad={() => {
            this.setState({
              isImgLoaded: true
            });
          }}
        />
        <TransitionGroup>
          <CSSTransition
            key={selectedGameID}
            timeout={300}
            classNames="titleinfodetail"
            unmountOnExit
          >
            <ExpansionPanelHeader
              game_title={selectedGameItem.game_title}
              isPanelMedia={isPanelMedia}
              isPanelDescription={isPanelDescription}
              handleExpansion={handleExpansion}
              selectedRowID={selectedRowID}
              selectedGameID={selectedGameID}
            />
          </CSSTransition>
        </TransitionGroup>
        <Row>
          <Col className="col-title-info" xs={12} md={4} lg={3}>
            <CSSTransition
              in={isGameItemApiData}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <ExpansionPanelInfo
                gameItemApiData={gameItemApiData}
                selectedGameItem={selectedGameItem}
                isPanelMedia={isPanelMedia}
                isPanelDescription={isPanelDescription}
              />
            </CSSTransition>
          </Col>
          <CSSTransition
            in={isPanelPriceHistory && isItemPrice}
            timeout={300}
            classNames="titleinfodetail"
            unmountOnExit
          >
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
          </CSSTransition>
          <CSSTransition
            in={isPanelMedia}
            timeout={300}
            classNames="titleinfodetail"
            unmountOnExit
          >
            <Col
              xs={12}
              md={8}
              lg={8}
              className="col-expansion-panel col-expansion-media"
            >
              {isPanelMedia &&
              mediaPreview !== undefined &&
              mediaScreenshot !== undefined ? (
                <ExpansionPanelMedia gameItemApiData={gameItemApiData} />
              ) : null}
            </Col>
          </CSSTransition>
          <CSSTransition
            in={isPanelDescription}
            timeout={300}
            classNames="titleinfodetail"
            unmountOnExit
          >
            <Col
              xs={12}
              md={8}
              lg={8}
              className="col-expansion-panel col-expansion-description"
            >
              <ExpansionPanelDescription gameItemApiData={gameItemApiData} />
            </Col>
          </CSSTransition>
        </Row>
        <Row className="expansion-menu">
          <TransitionGroup>
            <CSSTransition
              key={selectedGameID + 1}
              timeout={700}
              classNames="titlepanelmenu"
              unmountOnExit
            >
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
            </CSSTransition>
          </TransitionGroup>
        </Row>
      </Grid>
    );
  }
}

export default ExpansionPanel;
