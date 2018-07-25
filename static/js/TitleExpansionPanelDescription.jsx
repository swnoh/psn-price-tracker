import React from "react";
import { Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactHtmlParser from "react-html-parser";

class TitleExpansionPanelDescription extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { gameItem, gameItemData, selectedGameID } = this.props;

    const selectedGameItem = gameItem.gameItem.filter(
      item => item.id === selectedGameID
    )[0];

    const description = gameItemData.long_desc;

    return (
      // <TransitionGroup>
      //   <CSSTransition
      //     key={selectedGameID + 2}
      //     timeout={300}
      //     classNames="titleinfodetail"
      //     unmountOnExit
      //   >

      <h4>{ReactHtmlParser(description)}</h4>
      //   </CSSTransition>
      // </TransitionGroup>
    );
  }
}

export default TitleExpansionPanelDescription;
