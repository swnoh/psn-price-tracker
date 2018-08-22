import React from "react";
import ReactDOM from "react-dom";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PriceChart from "./PriceChart";
import Rating from "react-rating";
import TitleExpansionHeader from "./TitleExpansionHeader";
import TitleExpansionPanelInfo from "./TitleExpansionPanelInfo";
import TitleExpansionPanelPriceHistory from "./TitleExpansionPanelPriceHistory";
import TitleExpansionPanelMedia from "./TitleExpansionPanelMedia";
import TitleExpansionPanelDescription from "./TitleExpansionPanelDescription";
import { Element } from "react-scroll";

class TitleExpansion extends React.Component {
  state = {
    isPanelPriceHistory: true,
    isPanelMedia: false,
    isPanelDescription: false,
    isLoading: true
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
      gameItem,
      gameItemApiData,
      itemPrice,
      selectedRowID,
      selectedGameID
    } = this.props;

    const {
      isPanelPriceHistory,
      isPanelMedia,
      isPanelDescription
    } = this.state;

    const selectedGameItem = gameItem.gameItem.filter(
      item => item.game_id === selectedGameID
    )[0];

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
        <TransitionGroup>
          <CSSTransition
            key={selectedGameID}
            timeout={300}
            classNames="titleinfodetail"
            unmountOnExit
          >
            <React.Fragment>
              <TitleExpansionHeader
                game_title={selectedGameItem.game_title}
                isPanelMedia={isPanelMedia}
                isPanelDescription={isPanelDescription}
                handleExpansion={handleExpansion}
                selectedRowID={selectedRowID}
                selectedGameID={selectedGameID}
              />
            </React.Fragment>
          </CSSTransition>
        </TransitionGroup>
        <Row>
          <Col className="col-title-info" xs={12} md={4} lg={3}>
            <TitleExpansionPanelInfo
              selectedGameID={selectedGameID}
              gameItem={gameItem}
              gameItemApiData={gameItemApiData}
              selectedGameItem={selectedGameItem}
              isPanelMedia={isPanelMedia}
              isPanelDescription={isPanelDescription}
            />
          </Col>
          <CSSTransition
            in={isPanelPriceHistory}
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
              {/* {!this.state.isLoading ? ( */}
              <TitleExpansionPanelPriceHistory
                gameItem={gameItem}
                gameItemApiData={gameItemApiData}
                selectedGameItem={selectedGameItem}
                itemPrice={itemPrice}
                selectedGameID={selectedGameID}
              />
              {/* ) : null} */}
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
              {isPanelMedia ? (
                <TitleExpansionPanelMedia
                  gameItem={gameItem}
                  gameItemApiData={gameItemApiData}
                  selectedGameID={selectedGameID}
                />
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
              <TitleExpansionPanelDescription
                gameItem={gameItem}
                gameItemApiData={gameItemApiData}
                selectedGameID={selectedGameID}
              />
            </Col>
          </CSSTransition>
        </Row>
        <Row className="expansion-menu">
          <TransitionGroup>
            <CSSTransition
              key={selectedGameID + 111}
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

export default TitleExpansion;
