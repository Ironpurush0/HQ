import * as firebase  from 'firebase'

import 'firebase/firebase-auth'
import 'firebase/firebase-firestore'
import { CONFIG } from './config'

const firebaseConfig = CONFIG

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp() 
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export {auth, timestamp, provider}
export default db