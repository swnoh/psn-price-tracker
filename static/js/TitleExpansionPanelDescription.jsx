import React from "react";
import { Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactHtmlParser from "react-html-parser";

class TitleExpansionPanelDescription extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { gameItem, gameItemApiData, selectedGameID } = this.props;

    const selectedGameItem = gameItem.gameItem.filter(
      item => item.id === selectedGameID
    )[0];

    const description = gameItemApiData.long_desc;

    return <h4>{ReactHtmlParser(description)}</h4>;
  }
}

export default TitleExpansionPanelDescription;
