import React from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PriceChart from "./PriceChart";
import Rating from "react-rating";
import TitleExpansionPanelInfo from "./TitleExpansionPanelInfo";
import TitleExpansionPanelPriceHistory from "./TitleExpansionPanelPriceHistory";
import TitleExpansionPanelMedia from "./TitleExpansionPanelMedia";
import TitleExpansionPanelDescription from "./TitleExpansionPanelDescription";

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
    // fetch(API_URL + this.props.selectedTitleID)
    //   .then(response => response.json())
    //   .then(data => this.setState({ titleItemData: data }));
  }

  render() {
    const {
      handleExpansion,
      titleItem,
      titleItemData,
      selectedRowID,
      selectedTitleID
    } = this.props;

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
                ? {
                    backgroundImage: `url(
                ${mediaScreenshot[0].url}
              )`,
                    // backgroundPosition: "right",
                    // backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    opacity: "0.1"
                  }
                : null
            }
          />
          <Row>
            {" "}
            <TransitionGroup>
              <CSSTransition
                key={
                  this.state.isPanelMedia || this.state.isPanelDescription
                    ? selectedTitleID + 50
                    : selectedTitleID
                }
                timeout={300}
                classNames={
                  this.state.isPanelMedia || this.state.isPanelDescription
                    ? "titlename"
                    : "titlenamepanel"
                }
                unmountOnExit
              >
                <Col xs={12} className="col-expansion-title">
                  <h2>{selectedTitleItem.title_name}</h2>
                </Col>
              </CSSTransition>
            </TransitionGroup>
          </Row>
          <a
            className="close-button icon-close"
            aria-label="close"
            onClick={() => handleExpansion(selectedRowID, selectedTitleID)}
          >
            &times;
          </a>
          <Row>
            <TransitionGroup>
              <CSSTransition
                key={selectedTitleID + 1}
                timeout={300}
                classNames="titleinfodetail"
                unmountOnExit
              >
                <div>
                  <TitleExpansionPanelInfo
                    selectedTitleID={selectedTitleID}
                    titleItem={titleItem}
                    titleItemData={titleItemData}
                    selectedTitleItem={selectedTitleItem}
                    isPanelMedia={this.state.isPanelMedia}
                    isPanelDescription={this.state.isPanelDescription}
                  />

                  {this.state.isPanelPriceHistory ? (
                    <TitleExpansionPanelPriceHistory
                      titleItem={titleItem}
                      titleItemData={titleItemData}
                      selectedTitleID={selectedTitleID}
                    />
                  ) : null}
                </div>
              </CSSTransition>
            </TransitionGroup>
            <CSSTransition
              in={this.state.isPanelMedia}
              timeout={300}
              classNames="titleinfodetail"
              unmountOnExit
            >
              <TitleExpansionPanelMedia
                titleItem={titleItem}
                titleItemData={titleItemData}
                selectedTitleID={selectedTitleID}
              />
            </CSSTransition>
            <CSSTransition
              in={this.state.isPanelDescription}
              timeout={300}
              classNames="titleinfodetail"
              unmountOnExit
            >
              <TitleExpansionPanelDescription
                titleItem={titleItem}
                titleItemData={titleItemData}
                selectedTitleID={selectedTitleID}
              />
            </CSSTransition>
          </Row>
          <Row className="expansion-menu">
            <ul>
              <li className={this.state.isPanelPriceHistory ? "current" : ""}>
                <a onClick={this.handlePanel}>Price History</a>
                <span />
              </li>
              {mediaPreview !== undefined && mediaScreenshot !== undefined ? (
                <li className={this.state.isPanelMedia ? "current" : ""}>
                  <a onClick={this.handlePanel}>Media</a>
                  <span />
                </li>
              ) : null}

              <li className={this.state.isPanelDescription ? "current" : ""}>
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
