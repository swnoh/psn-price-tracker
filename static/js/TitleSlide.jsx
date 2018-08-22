import React from "react";
import { Grid } from "react-bootstrap";
import Slider from "react-slick";
import TitleRow from "./TitleRow";

class TitleSlide extends React.Component {
  state = {
    slideChunk: 10
  };

  handleResize = () => {
    if (window.innerWidth > 1904)
      this.setState({
        slideChunk: 10
      });
    else if (window.innerWidth > 1729)
      this.setState({
        slideChunk: 9
      });
    else if (window.innerWidth > 1554)
      this.setState({
        slideChunk: 8
      });
    else if (window.innerWidth > 1379)
      this.setState({
        slideChunk: 7
      });
    else if (window.innerWidth > 1204)
      this.setState({
        slideChunk: 6
      });
    else if (window.innerWidth > 1029)
      this.setState({
        slideChunk: 5
      });
    else if (window.innerWidth > 854)
      this.setState({
        slideChunk: 4
      });
    else
      this.setState({
        slideChunk: 3
      });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const {
      gameItem,
      rowid,
      isDetailExpansion,
      handleSelectTitle,
      handleExpansion,
      selectedRowID,
      selectedGameID,
      categoryExpansionPanel
    } = this.props;

    const slick_settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !categoryExpansionPanel,
      lazyLoad: true,
      draggable: false
    };

    let splitGameItem = [];
    let chunk = this.state.slideChunk;

    for (let i = 0, j = gameItem.length; i < j; i += chunk) {
      splitGameItem.push({
        gameItem: gameItem.slice(i, i + chunk)
      });
    }

    return (
      <Grid fluid>
        <Slider {...slick_settings}>
          {splitGameItem.map(({ gameItem }, index) => (
            <TitleRow
              key={index}
              gameItem={gameItem}
              rowid={rowid}
              isDetailExpansion={isDetailExpansion}
              handleSelectTitle={handleSelectTitle}
              handleExpansion={handleExpansion}
              selectedRowID={selectedRowID}
              selectedGameID={selectedGameID}
              categoryExpansionPanel={categoryExpansionPanel}
              gameItem={gameItem}
            />
          ))}
        </Slider>
      </Grid>
    );
  }
}

export default TitleSlide;
