import React from 'react';
import { Grid } from 'react-bootstrap';
import Slider from 'react-slick';
import TitleRow from '../containers/TitleRow';

class TitleSlide extends React.Component {
  state = {
    activeSlide: 0
  };

  render() {
    const {
      gameItem,
      rowid,
      categoryExpansionPanel,
      slideChunk,
      isCategoryQuick,
      categoryTitleHover,
      currentIdx,
      selectedIndex
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
      height: slideChunk > 3 ? (window.innerWidth / slideChunk) * 1.5 : '400px'
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
          isCategoryQuick && categoryTitleHover && selectedIndex == currentIdx
            ? 'row-slide-hover'
            : ''
        } ${this.state.activeSlide === 0 ? 'initial-slide' : ''}`}
        style={defaultStyle}
      >
        <Slider {...slick_settings}>
          {splitGameItem.map(({ gameItem }, index) => (
            <TitleRow key={index} gameItem={gameItem} rowid={rowid} />
          ))}
        </Slider>
      </Grid>
    );
  }
}

export default TitleSlide;
