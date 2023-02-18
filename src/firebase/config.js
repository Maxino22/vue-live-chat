import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXfUcRSzztBlSkKVyW2Ix-iigmCe6XlQY",
  authDomain: "vue-firebase-db59b.firebaseapp.com",
  projectId: "vue-firebase-db59b",
  storageBucket: "vue-firebase-db59b.appspot.com",
  messagingSenderId: "906310604897",
  appId: "1:906310604897:web:2bdfec4869c970cfd5f220",
};

//init firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
