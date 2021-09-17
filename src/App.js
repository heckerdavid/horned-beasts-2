import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./components/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import beastData from "./data.json";
import BeastModal from "./components/modal";
import HornForm from './components/form.js';

// let renderThese = beastData;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: beastData[0],
      showModal: false,
      renderThese: beastData,
    };
  }

  handleSelect = (choice) => {
    let renderThisNow;
    switch (choice) {
      case "0":
        renderThisNow = beastData;
        break;
      case "1":
        renderThisNow = beastData.filter((beast) => (beast.horns === 1));
        break;
      case "2":
        renderThisNow = beastData.filter((beast) => (beast.horns === 2));
        break;
      case "3":
        renderThisNow = beastData.filter((beast) => (beast.horns === 3));
        break;
      case "100":
        renderThisNow = beastData.filter((beast) => (beast.horns === 100));
        break;
      default:
        break;
    }
    this.setState({renderThese: renderThisNow,})
  }

  updateSelected = (newSelection) => {
    this.setState({ selectedBeast: newSelection });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div>
        <Header header="Horns" />
        <HornForm onSelect={this.handleSelect}/>
        <Main
          beastData={this.state.renderThese}
          updateSelected={this.updateSelected}
          showModal={this.showModal}
        />
        <Footer footer="Made by David, Brains by Hexx/Sara/Audrey" />
        <BeastModal
          data={this.state.selectedBeast}
          hideModal={this.hideModal}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}
