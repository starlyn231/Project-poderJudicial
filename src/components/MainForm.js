import React, { Component } from "react";
import "../page/style.css";

import Page1 from "../page/Page1";
import Page2 from "../page/Page2";
import Page3 from "../page/Page3";
import Page4 from "../page/Page4";
import Page5 from "../page/Page5";
import Page6 from "../page/Page6";
import Breadcrumb from "./Breadcrumb";
export class MasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };
  }

  next = () => {
    let currentStep = this.state.currentStep;
    //currentStep = currentStep >= 2 ? 3 : currentStep + 1;

    this.setState({
      currentStep: currentStep + 1,
    });
  };

  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  //the functions for our button

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep > 1) {
      return (
        <button
          className="btn btn-primary text-center  "
          id="back"
          type="button"
          onClick={this.prev}
        >
          Atrás
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 6) {
      return (
        <button
          id="next"
          className="btn btn-primary text-center"
          type="button"
          onClick={this.next}
        >
          Siguiente
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="container justify-content">
        <h1>React Form</h1>
        <Breadcrumb />

        <form>
          <Page1 currentStep={this.state.currentStep} />

          <Page2 currentStep={this.state.currentStep} />

          <Page3 currentStep={this.state.currentStep} />
          <Page4 currentStep={this.state.currentStep} />
          <Page5 currentStep={this.state.currentStep} />
          <Page6 currentStep={this.state.currentStep} />
          {this.previousButton()}
          {this.nextButton()}
        </form>
      </div>
    );
  }
}

export default MasterForm;
