import * as firebase  from 'firebase'

import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCMEeWloCzwzG95le8IJYhDl3NpfQ9vswY",
    authDomain: "slack-clone-e9eae.firebaseapp.com",
    databaseURL: "https://slack-clone-e9eae.firebaseio.com",
    projectId: "slack-clone-e9eae",
    storageBucket: "slack-clone-e9eae.appspot.com",
    messagingSenderId: "970522264446",
    appId: "1:970522264446:web:db496abb7beff71756692f",
    measurementId: "G-48X6XT00D6"
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp() 
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export {auth, timestamp, provider}
export default db