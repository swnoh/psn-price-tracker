import React from "react";
import { Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ReactHtmlParser from "react-html-parser";

class TitleExpansionPanelDescription extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { titleItem, titleItemData, selectedTitleID } = this.props;

    const selectedTitleItem = titleItem.titleItem.filter(
      item => item.id === selectedTitleID
    )[0];

    const description = titleItemData.long_desc;

    return (
      // <TransitionGroup>
      //   <CSSTransition
      //     key={selectedTitleID + 2}
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
