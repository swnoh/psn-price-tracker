import React from "react";
import { Grid, ListGroup, ListGroupItem, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TitleRow from "./TitleRow";
import TitleExpansion from "./TitleExpansion";
import mockData from "./mockData";
import mockData2 from "./mockData2";

const API_URL =
  "https://store.playstation.com/store/api/chihiro/00_09_000/container/CA/en/19/";

class MainWrapper extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      isDetailExpansion: false,
      selectedRowID: "",
      selectedTitleID: "",
      isInitialTransition: false,
      titleItemData: {}
    };
  }
  componentDidMount() {
    this.setState({ isInitialTransition: true });
  }

  handleSelectTitle = (rowid, id) => {
    this.setState({
      selectedRowID: rowid,
      selectedTitleID: id
    });
  };

  handleExpansion = (rowid, id) => {
    this.setState({
      selectedRowID: rowid,
      selectedTitleID: id,
      isDetailExpansion:
        this.state.selectedTitleID !== id ? true : !this.state.isDetailExpansion
    });
    fetch(API_URL + id)
      .then(response => response.json())
      .then(data => this.setState({ titleItemData: data }));
  };

  render() {
    const {
      isDetailExpansion,
      selectedRowID,
      selectedTitleID,
      isInitialTransition
    } = this.state;

    return (
      <Grid fluid>
        {mockData2.map(({ id, category_name, titleItem }) => (
          <div>
            <CSSTransition
              in={isInitialTransition}
              timeout={300}
              classNames="fade"
              unmountOnExit
            >
              <div>
                <h3> {category_name} </h3>
                <TitleRow
                  rowid={id}
                  titleItem={titleItem}
                  selectedRowID={selectedRowID}
                  selectedTitleID={selectedTitleID}
                  isDetailExpansion={isDetailExpansion}
                  handleSelectTitle={this.handleSelectTitle}
                  handleExpansion={this.handleExpansion}
                />
                <CSSTransition
                  in={isDetailExpansion && selectedRowID == id}
                  timeout={300}
                  classNames="expansion"
                  unmountOnExit
                >
                  <TitleExpansion
                    titleItem={
                      mockData2.filter(
                        categoryItem => categoryItem.id === selectedRowID
                      )[0]
                    }
                    titleItemData={this.state.titleItemData}
                    selectedRowID={selectedRowID}
                    selectedTitleID={selectedTitleID}
                    isDetailExpansion={isDetailExpansion}
                    handleExpansion={this.handleExpansion}
                  />
                </CSSTransition>
              </div>
            </CSSTransition>
          </div>
        ))}
      </Grid>
    );
  }
}

export default MainWrapper;
