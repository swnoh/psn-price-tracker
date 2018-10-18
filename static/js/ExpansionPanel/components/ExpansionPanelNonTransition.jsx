import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';

import PriceChart from './PriceChart';
import ExpansionPanelHeader from '../containers/ExpansionPanelHeader';
import ExpansionPanelInfo from '../containers/ExpansionPanelInfo';
import ExpansionPanelPriceHistory from '../containers/ExpansionPanelPriceHistory';
import ExpansionPanelMedia from '../containers/ExpansionPanelMedia';
import ExpansionPanelDescription from '../containers/ExpansionPanelDescription';

class ExpansionPanel extends React.Component {
  handlePanel = event => {
    this.props.selectCurrentPanel(event.target.text);
  };
  componentDidMount() {
    this.props.selectCurrentGameItem(
      this.props.categoryItems,
      this.props.selectedRowID,
      this.props.selectedGameID
    );
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
        <ExpansionPanelHeader />
        <Row>
          <Col className="col-title-info" xs={12} md={4} lg={3}>
            <ExpansionPanelInfo />
          </Col>
          {isPanelPriceHistory &&
            isItemPrice && (
              <Col
                xs={12}
                md={8}
                lg={8}
                className="col-expansion-panel col-expansion-price"
              >
                <ExpansionPanelPriceHistory />
              </Col>
            )}
          {isPanelMedia && (
            <Col
              xs={12}
              md={8}
              lg={8}
              className="col-expansion-panel col-expansion-media"
            >
              {isPanelMedia ? <ExpansionPanelMedia /> : null}
            </Col>
          )}
          {isPanelDescription && (
            <Col
              xs={12}
              md={8}
              lg={8}
              className="col-expansion-panel col-expansion-description"
            >
              <ExpansionPanelDescription />
            </Col>
          )}
        </Row>
        <Row className="expansion-menu">
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
        </Row>
      </Grid>
    );
  }
}

export default ExpansionPanel;
