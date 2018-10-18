import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Rating from 'react-rating';
import ExpansionPanelHeader from '../containers/ExpansionPanelHeader';
import ExpansionPanelInfo from '../containers/ExpansionPanelInfo';
import ExpansionPanelPriceHistory from '../containers/ExpansionPanelPriceHistory';
import ExpansionPanelMedia from '../containers/ExpansionPanelMedia';
import ExpansionPanelDescription from '../containers/ExpansionPanelDescription';

class ExpansionPanel extends React.Component {
  state = {
    isImgLoaded: false
  };

  handlePanel = event => {
    this.props.selectCurrentPanel(event.target.text);
  };

  componentDidMount() {
    this.props.selectCurrentGameItem(
      this.props.categoryItems,
      this.props.selectedRowID,
      this.props.selectedGameID
    );
    this.props.isExpansionPanelMounted(true);
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedGameID !== prevProps.selectedGameID) {
      this.props.selectCurrentPanel('initial');
      this.props.selectCurrentGameItem(
        this.props.categoryItems,
        this.props.selectedRowID,
        this.props.selectedGameID
      );
    }
  }

  componentWillUnmount() {
    this.props.isExpansionPanelMounted(false);
  }

  render() {
    const {
      gameItemApiData,
      isGameItemApiData,
      isItemPrice,
      selectedGameID,
      isPanelPriceHistory,
      isPanelMedia,
      isPanelDescription
    } = this.props;

    const { isImgLoaded } = this.state;

    const mediaPreview =
      gameItemApiData.mediaList && gameItemApiData.mediaList.previews;
    const mediaScreenshot =
      gameItemApiData.mediaList && gameItemApiData.mediaList.screenshots;

    const backgroundImgUrl =
      mediaScreenshot !== undefined ? mediaScreenshot[0].url : '';
    const backgroundImgStyle = {
      transition: `opacity 1000ms ease-in-out`,
      backgroundImage: `url(${backgroundImgUrl})`
    };

    return (
      <Grid className="container-expansion">
        <div
          className="expansion-background"
          style={
            !this.state.isImgLoaded ? { opacity: '0' } : backgroundImgStyle
          }
        />
        <img
          style={{ display: 'none' }}
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
            <ExpansionPanelHeader />
          </CSSTransition>
        </TransitionGroup>
        <Row>
          <Col className="col-title-info" xs={12} md={4} lg={4}>
            <CSSTransition
              in={isGameItemApiData}
              timeout={500}
              classNames="fade"
              unmountOnExit
            >
              <ExpansionPanelInfo />
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
              <ExpansionPanelPriceHistory />
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
                <ExpansionPanelMedia />
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
              <ExpansionPanelDescription />
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
                <li className={isPanelPriceHistory ? 'current' : ''}>
                  <a onClick={this.handlePanel}>Price History</a>
                  <span />
                </li>
                {mediaPreview !== undefined && mediaScreenshot !== undefined ? (
                  <li className={isPanelMedia ? 'current' : ''}>
                    <a onClick={this.handlePanel}>Media</a>
                    <span />
                  </li>
                ) : null}

                <li className={isPanelDescription ? 'current' : ''}>
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
