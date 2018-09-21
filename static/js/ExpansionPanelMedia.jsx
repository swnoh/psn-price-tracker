import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "./stylesVideo.css";
import Slider from "react-slick";

class ExpansionPanelMedia extends React.Component {
  state = {
    activeSlide: 0
  };

  pause = index => {
    if (typeof this.refs["videoPlayer" + index] !== "undefined")
      this.refs["videoPlayer" + index].videoEl.pause();
  };

  render() {
    const { gameItemApiData } = this.props;

    const mediaPreview =
      gameItemApiData.mediaList && gameItemApiData.mediaList.previews;
    const mediaScreenshot =
      gameItemApiData.mediaList && gameItemApiData.mediaList.screenshots;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      lazyLoad: true,
      afterChange: current => this.setState({ activeSlide: current })
    };

    return (
      <Slider {...settings}>
        {mediaPreview.map((preview, index) => (
          <Video
            ref={"videoPlayer" + index}
            key={index}
            muted
            controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          >
            <source src={preview.url} type="video/mp4" />
            {this.state.activeSlide !== index ? this.pause(index) : null}
          </Video>
        ))}
        {mediaScreenshot.map((screenshot, index) => (
          <img src={screenshot.url} key={index} />
        ))}
      </Slider>
    );
  }
}

export default ExpansionPanelMedia;
