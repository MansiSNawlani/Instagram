import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import seed file

// import seedDatabase from '../seed';

const config = {
  apiKey: 'AIzaSyC2pAXmtW26_7l75MiRDWaBnV7kNvQLoTU',
  authDomain: 'instagram-yt-1d7a4.firebaseapp.com',
  projectId: 'instagram-yt-1d7a4',
  storageBucket: 'instagram-yt-1d7a4.appspot.com',
  messagingSenderId: '780052717869',
  appId: '1:780052717869:web:3913fc6d5dfb1697dc73a4',
};

const firebase = Firebase.initializeApp(config);

const { FieldValue } = Firebase.firestore;
// call the seed file here(only once)
// seedDatabase(firebase);

export { firebase, FieldValue };
