import React from "react";
import { Carousel } from "react-bootstrap";

const SITE_URL = "http://psntracker.azurewebsites.net";

class MainBanner extends React.Component {
  state = {
    homeImgs: []
  };

  componentDidMount() {
    fetch(`${SITE_URL}/api/psn/banner`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ homeImgs: data.bannerItems });
      })
      .catch(error => console.log("Fetch error"));
  }

  render() {
    return (
      <Carousel indicators={false}>
        {this.state.homeImgs.map((img, index) => (
          <Carousel.Item key={index}>
            <img src={img} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default MainBanner;
