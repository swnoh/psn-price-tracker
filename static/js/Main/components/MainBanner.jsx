import React from 'react';
import { Carousel } from 'react-bootstrap';

class MainBanner extends React.Component {
  render() {
    if (!this.props.bannerItems) return null;

    return (
      <Carousel indicators={false}>
        {this.props.bannerItems.map((img, index) => (
          <Carousel.Item key={index}>
            <img src={img} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default MainBanner;
