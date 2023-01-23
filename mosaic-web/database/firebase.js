import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAVWAPNk-ZT2iBspROdcFMTMbyJOVoC3As",
    authDomain: "mosaic-76e3c.firebaseapp.com",
    projectId: "mosaic-76e3c",
    storageBucket: "mosaic-76e3c.appspot.com",
    messagingSenderId: "471984825969",
    appId: "1:471984825969:web:170877dfb0fd7d2cbf5dd0",
    measurementId: "G-PL0GTDTZPS"
  };


firebase.initializeApp(firebaseConfig);

export default firebase;