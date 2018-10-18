import React from 'react';
import ReactHtmlParser from 'react-html-parser';

class ExpansionPanelDescription extends React.Component {
  render() {
    const { gameItemApiData } = this.props;
    const description = gameItemApiData.long_desc;

    return <h4>{ReactHtmlParser(description)}</h4>;
  }
}

export default ExpansionPanelDescription;
