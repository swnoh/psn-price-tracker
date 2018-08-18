import React from "react";
import { Carousel } from "react-bootstrap";

const SITE_URL = "http://psntracker.azurewebsites.net";
// const SITE_URL = "http://localhost:5000";

class MainFeature extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      homeImgs: []
    };
  }

  componentDidMount() {
    fetch(`${SITE_URL}/db/psn/banner`)
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
            <img width={800} src={img} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default MainFeature;
