import React from "react";
import ReactHtmlParser from "react-html-parser";

class ExpansionPanelDescription extends React.Component {
  render() {
    const { gameItem, gameItemApiData, selectedGameID } = this.props;

    const selectedGameItem = gameItem.gameItem.filter(
      item => item.id === selectedGameID
    )[0];

    const description = gameItemApiData.long_desc;

    return <h4>{ReactHtmlParser(description)}</h4>;
  }
}

export default ExpansionPanelDescription;
