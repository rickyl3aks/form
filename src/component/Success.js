import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    //process form//
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render(props) {
    const { firstName, email } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>
            Thank you for your Submission{" "}
            {firstName.charAt(0).toUpperCase() + firstName.slice(1)}
          </h1>
          <p>You will receive an email to {email} with further instruction</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
