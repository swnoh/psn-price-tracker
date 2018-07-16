import React from "react";
import { Col } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { DefaultPlayer as Video } from "react-html5video";
import "./stylesVideo.css";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";

class TitleExpansionPanelMedia extends React.Component {
  constructor(prop) {
    super(prop);
  }

  render() {
    const { titleItem, selectedTitleID } = this.props;

    const selectedTitleItem = titleItem.titleItem.filter(
      item => item.id === selectedTitleID
    )[0];

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <TransitionGroup>
        <CSSTransition
          key={selectedTitleID + 3}
          timeout={300}
          classNames="titleinfodetail"
          unmountOnExit
        >
          <Col
            xs={12}
            md={4}
            lg={8}
            className="col-expansion-panel col-expansion-media"
          >
            <Slider {...settings}>
              <div className="media-content">
                <Video
                  //   autoPlay
                  loop
                  muted
                  height="400"
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen"
                  ]}
                  poster="https://apollo2.dl.playstation.net/cdn/UP0006/CUSA05364_00/FREE_CONTENTwKwLcUWWv7nfz9gQId0Z/PREVIEW_SCREENSHOT7_165873.jpg"
                >
                  <source
                    src="https://apollo2.dl.playstation.net/cdn/UP0006/CUSA05364_00/FREE_CONTENTuhXPyucdtUg8Cn7FoH4l/PREVIEW_GAMEPLAY_VIDEO_165873.mp4"
                    type="video/mp4"
                  />
                </Video>
              </div>
              <div className="media-content">
                <Video
                  //   autoPlay
                  loop
                  muted
                  height="400"
                  controls={[
                    "PlayPause",
                    "Seek",
                    "Time",
                    "Volume",
                    "Fullscreen"
                  ]}
                  poster="https://apollo2.dl.playstation.net/cdn/UP0006/CUSA05364_00/FREE_CONTENTwKwLcUWWv7nfz9gQId0Z/PREVIEW_SCREENSHOT7_165873.jpg"
                >
                  <source
                    src="https://apollo2.dl.playstation.net/cdn/UP9000/CUSA08966_00/FREE_CONTENT30d3k2lD1qqZi2a6Vfvf/PREVIEW_GAMEPLAY_VIDEO_152835.mp4"
                    type="video/mp4"
                  />
                </Video>
              </div>
              <div className="media-content">
                <img
                  width={700}
                  height={400}
                  src="https://apollo2.dl.playstation.net/cdn/UP9000/CUSA08966_00/FREE_CONTENTTKpKgHCnTYhrn2Oeh7KV/PREVIEW_SCREENSHOT2_152835.jpg"
                />
              </div>
              <div className="media-content">
                <img
                  width={700}
                  height={400}
                  src="https://apollo2.dl.playstation.net/cdn/UP9000/CUSA08966_00/FREE_CONTENTyUxKNWzpY5TuxlC4gV1Q/PREVIEW_SCREENSHOT1_152835.jpg"
                />
              </div>
              <div className="media-content">
                <h3>5</h3>
              </div>
              <div className="media-content">
                <h3>6</h3>
              </div>
            </Slider>
          </Col>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default TitleExpansionPanelMedia;
