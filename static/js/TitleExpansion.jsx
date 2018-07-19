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
  constructor(prop) {
    super(prop);
    this.state = {
      isPanelPriceHistory: true,
      isPanelMedia: false,
      isPanelDescription: false,
      titleItemData: {}
    };
  }

  Background =
    "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/999/UP0001-BLUS31182_00-RS002PACK0000252/1531240868000/image?w=496&h=700&bg_color=000000&opacity=100&_version=00_09_000";

  detailBackgroundStyle = {
    backgroundImage: {
      width: "100%",
      backgroundImage: `url(${this.Background})`,
      backgroundPosition: "left",
      backgroundRepeat: "no-repeat"
    },
    overlay: {
      width: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.95)"
    }
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
    if (this.props.selectedTitleID !== prevProps.selectedTitleID) {
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
      titleItem,
      titleItemData,
      selectedRowID,
      selectedTitleID
    } = this.props;

    const {
      isPanelPriceHistory,
      isPanelMedia,
      isPanelDescription
    } = this.state;

    const selectedTitleItem = titleItem.titleItem.filter(
      item => item.id === selectedTitleID
    )[0];

    const mediaPreview =
      titleItemData.mediaList && titleItemData.mediaList.previews;
    const mediaScreenshot =
      titleItemData.mediaList && titleItemData.mediaList.screenshots;

    return (
      <div className="container-expansion">
        <Grid>
          <div
            className="expansion-background"
            style={
              mediaScreenshot !== undefined
                ? { backgroundImage: `url(${mediaScreenshot[0].url}) ` }
                : null
            }
            ref="scrollToExpansion"
          />
          <TransitionGroup>
            <CSSTransition
              key={selectedTitleID}
              timeout={300}
              classNames="titleinfodetail"
              unmountOnExit
            >
              <React.Fragment>
                <TitleExpansionHeader
                  title_name={selectedTitleItem.title_name}
                  isPanelMedia={isPanelMedia}
                  isPanelDescription={isPanelDescription}
                  handleExpansion={handleExpansion}
                  selectedRowID={selectedRowID}
                  selectedTitleID={selectedTitleID}
                />
              </React.Fragment>
            </CSSTransition>
          </TransitionGroup>
          <Row>
            <TransitionGroup>
              <CSSTransition
                key={selectedTitleID + 1}
                timeout={300}
                classNames="titleinfo"
                unmountOnExit
              >
                <Col className="col-title-info" xs={12} md={4} lg={3}>
                  <TitleExpansionPanelInfo
                    selectedTitleID={selectedTitleID}
                    titleItem={titleItem}
                    titleItemData={titleItemData}
                    selectedTitleItem={selectedTitleItem}
                    isPanelMedia={isPanelMedia}
                    isPanelDescription={isPanelDescription}
                  />
                </Col>
              </CSSTransition>
            </TransitionGroup>
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
                <TitleExpansionPanelPriceHistory
                  titleItem={titleItem}
                  titleItemData={titleItemData}
                  selectedTitleID={selectedTitleID}
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
                <TitleExpansionPanelMedia
                  titleItem={titleItem}
                  titleItemData={titleItemData}
                  selectedTitleID={selectedTitleID}
                />
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
                  titleItem={titleItem}
                  titleItemData={titleItemData}
                  selectedTitleID={selectedTitleID}
                />
              </Col>
            </CSSTransition>
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
      </div>
    );
  }
}

export default TitleExpansion;
