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
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  }

  handleToken = (token) => {
    window.localStorage.accessToken = token;
  }

  render() {
    return (
      <SignInFormWrapper>
        {window.localStorage.accessToken ? (
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
            />
          </SignInFormContent>
        )}
      </SignInFormWrapper>
    );
  }
}

export default App;
