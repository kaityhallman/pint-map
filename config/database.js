/* eslint-disable no-undef */
import firebase from 'firebase';

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;
/* eslint-enable no-undef */
