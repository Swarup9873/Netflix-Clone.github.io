import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCnHJa0P6Rupx7TADYlnkVuBVHrrHjwAIY",
  authDomain: "netflix-clone-7a767.firebaseapp.com",
  projectId: "netflix-clone-7a767",
  storageBucket: "netflix-clone-7a767.appspot.com",
  messagingSenderId: "154089750837",
  appId: "1:154089750837:web:2ea2f794d11700ae060c7c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);
const auth = firebaseApp.auth();

export {auth};
export default {db};