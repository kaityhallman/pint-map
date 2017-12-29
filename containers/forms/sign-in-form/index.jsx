import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';

import {
  Form,
  Legend,
} from '../style.js';

import {
  Paragraph,
  Input,
  Label,
  Button,
} from '../../../assets/app.js';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setupRecaptchaVerifier();
  }

  setupRecaptchaVerifier = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        // recaptcha verified
        this.props.handleToken(response);
        this.setState({ codeReceived: true });
      },
    });
  }

  handlePhoneNumberEntry = (event) => {
    event.preventDefault();

    const { phoneNumber } = this.props;
    const appVerifier = window.recaptchaVerifier;
    const formattedPhoneNumber = `+1${phoneNumber.replace('-', '').replace(' ', '')}`;

    firebase.auth().signInWithPhoneNumber(formattedPhoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.error(`SMS not sent to ${phoneNumber} as a result of this error: ${error}`); // eslint-disable-line
      });
  }

  handleSignIn = (event) => {
    event.preventDefault();

    const { verificationCode } = this.props;
    window.confirmationResult.confirm(verificationCode)
      .then(() => {
        this.props.toggleLogIn();
        this.props.confirmVerificationCode();
      })
      .catch((error) => {
        console.error(`User couldn't sign in. Bad verification code? ${error}`); // eslint-disable-line
      });
  }

  handleEntry = (event) => {
    if (this.state.codeReceived) {
      this.handleSignIn(event);
    } else {
      this.handlePhoneNumberEntry(event);
    }
  }

  render() {
    return (
      <Form>
        <Legend>Sign into Pint App</Legend>
        <Paragraph>
          Please enter your phone number for verification that you are not a robot.
        </Paragraph>
        <div className="field">
          <Label
            htmlFor="sign-in-input"
          >
            Phone Number
            <Input
              type="text"
              placeholder="(704) 555-5555"
              id="sign-in-input"
              name="sign-in-input"
              value={this.props.phoneNumber}
              onChange={event => this.props.updatePhoneNumber(event)}
            />
          </Label>
        </div>
        {this.state.codeReceived &&
        <div className="field">
          <p>Please enter the verification code sent to your mobile device.</p>
          <Label htmlFor="verification-code">
            Verification Code
            <Input
              type="text"
              placeholder="123456"
              id="verification-code"
              name="verification-code"
              value={this.props.verificationCode}
              onChange={event => this.props.enterVerificationCode(event)}
            />
          </Label>
        </div>}
        <div className="field">
          <Button
            id="sign-in-button"
            type="submit"
            onClick={event => this.handleEntry(event)}
          >
            Sign In
          </Button>
        </div>
      </Form>
    );
  }
}

SignInForm.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  updatePhoneNumber: PropTypes.func.isRequired,
  verificationCode: PropTypes.string.isRequired,
  enterVerificationCode: PropTypes.func.isRequired,
  toggleLogIn: PropTypes.func.isRequired,
  handleToken: PropTypes.func.isRequired,
  confirmVerificationCode: PropTypes.func.isRequired,
};

export default SignInForm;
