import React from "react";
import { Grid } from "react-bootstrap";
import Slider from "react-slick";
import TitleRow from "./TitleRow";

class TitleSlide extends React.Component {
  state = {
    activeSlide: 0
  };

  render() {
    const {
      gameItem,
      rowid,
      showExpansionPanel,
      handleSelectTitle,
      handleExpansion,
      selectedRowID,
      selectedGameID,
      categoryExpansionPanel,
      slideChunk,
      isCategoryQuick,
      categoryTitleHover,
      currentIdx,
      index
    } = this.props;

    const slick_settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !categoryExpansionPanel,
      lazyLoad: true,
      draggable: slideChunk > 3 ? false : true,
      beforeChange: (current, next) => this.setState({ activeSlide: next })
    };

    const defaultStyle = {
      height: slideChunk > 3 ? (window.innerWidth / slideChunk) * 1.5 : "400px"
    };

    let splitGameItem = [];
    let chunk = slideChunk;

    for (let i = 0, j = gameItem.length; i < j; i += chunk) {
      splitGameItem.push({
        gameItem: gameItem.slice(i, i + chunk)
      });
    }

    return (
      <Grid
        fluid
        className={`container-row-slide ${
          categoryTitleHover && index == currentIdx ? "row-slide-hover" : ""
        } ${this.state.activeSlide === 0 ? "initial-slide" : ""}`}
        style={defaultStyle}
      >
        <Slider {...slick_settings}>
          {splitGameItem.map(({ gameItem }, index) => (
            <TitleRow
              key={index}
              gameItem={gameItem}
              rowid={rowid}
              showExpansionPanel={showExpansionPanel}
              handleSelectTitle={handleSelectTitle}
              handleExpansion={handleExpansion}
              selectedRowID={selectedRowID}
              selectedGameID={selectedGameID}
              categoryExpansionPanel={categoryExpansionPanel}
              slideChunk={slideChunk}
              isCategoryQuick={isCategoryQuick}
            />
          ))}
        </Slider>
      </Grid>
    );
  }
}

export default TitleSlide;
