import React from "react";
import { Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DefaultPlayer as Video } from "react-html5video";
import "./stylesVideo.css";
import Slider from "react-slick";

class TitleExpansionPanelMedia extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { gameItem, gameItemData, selectedGameID } = this.props;

    const selectedGameItem = gameItem.gameItem.filter(
      item => item.id === selectedGameID
    )[0];

    const mediaPreview =
      gameItemData.mediaList && gameItemData.mediaList.previews;
    const mediaScreenshot =
      gameItemData.mediaList && gameItemData.mediaList.screenshots;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {mediaPreview.map(preview => (
          <div className="media-content">
            <Video
              loop
              muted
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
            >
              <source src={preview.url} type="video/mp4" />
            </Video>
          </div>
        ))}
        {mediaScreenshot.map(screenshot => (
          <div className="media-content">
            <img src={screenshot.url} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default TitleExpansionPanelMedia;
