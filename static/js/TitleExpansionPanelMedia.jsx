import React from "react";
import { Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DefaultPlayer as Video } from "react-html5video";
import "./stylesVideo.css";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import ErrorBoundary from "./ErrorBoundary";

class TitleExpansionPanelMedia extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { titleItem, titleItemData, selectedTitleID } = this.props;

    const selectedTitleItem = titleItem.titleItem.filter(
      item => item.id === selectedTitleID
    )[0];

    const mediaPreview =
      titleItemData.mediaList && titleItemData.mediaList.previews;
    const mediaScreenshot =
      titleItemData.mediaList && titleItemData.mediaList.screenshots;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      // <TransitionGroup>
      //   <CSSTransition
      //     key={selectedTitleID + 3}
      //     timeout={300}
      //     classNames="titleinfodetail"
      //     unmountOnExit
      //   >

      <Slider {...settings}>
        {mediaPreview.map(preview => (
          <div className="media-content">
            <Video
              loop
              muted
              height="900px"
              controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
              // poster="https://apollo2.dl.playstation.net/cdn/UP0006/CUSA05364_00/FREE_CONTENTwKwLcUWWv7nfz9gQId0Z/PREVIEW_SCREENSHOT7_165873.jpg"
            >
              <source src={preview.url} type="video/mp4" />
            </Video>
          </div>
        ))}
        {mediaScreenshot.map(screenshot => (
          <div className="media-content">
            <img width={700} height={400} src={screenshot.url} />
          </div>
        ))}
      </Slider>
      //   </CSSTransition>
      // </TransitionGroup>
    );
  }
}

export default TitleExpansionPanelMedia;
