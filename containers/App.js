import React, { Component } from 'react';

import Hero from '../containers/hero/index.jsx';
import Main from '../containers/main/index.jsx';
import SignInForm from '../containers/forms/sign-in-form/index.jsx';

import {
  SignInFormWrapper,
  SignInFormContent,
} from '../assets/app';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      phoneNumber: '',
      verificationCode: '',
      verified: false,
    };
  }

  updatePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value,
    });
  }

  enterVerificationCode = (event) => {
    this.setState({
      verificationCode: event.target.value,
    });
  }

  toggleLogIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
      verified: this.state.isLoggedIn,
      phoneNumber: '',
    });
  }

  handleToken = (token) => {
    window.localStorage.accessToken = token;
  }

  confirmVerificationCode = () => {
    this.setState({ verified: true });
  }

  render() {
    return (
      <SignInFormWrapper>
        {window.localStorage.accessToken && this.state.verified ? (
          <Main
            toggleLogIn={this.toggleLogIn}
          />
        ) : (
          <SignInFormContent>
            <Hero />
            <SignInForm
              phoneNumber={this.state.phoneNumber}
              updatePhoneNumber={this.updatePhoneNumber}
              verificationCode={this.state.verificationCode}
              enterVerificationCode={this.enterVerificationCode}
              toggleLogIn={this.toggleLogIn}
              handleToken={this.handleToken}
              verified={this.state.verified}
              confirmVerificationCode={this.confirmVerificationCode}
            />
          </SignInFormContent>
        )}
      </SignInFormWrapper>
    );
  }
}

export default App;
