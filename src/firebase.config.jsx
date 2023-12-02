import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD4CvUaTmDuTyDwteMLcCOg9ci48gU2szo",
  authDomain: "artisanatmonprojet.firebaseapp.com",
  projectId: "artisanatmonprojet",
  storageBucket: "artisanatmonprojet.appspot.com",
  messagingSenderId: "1015818719556",
  appId: "1:1015818719556:web:e4b19b0e776aae7e370711"
};


const App = initializeApp(firebaseConfig);
export const Auth=getAuth(App);
export const Db=getFirestore(App);
export const storage=getStorage(App);

export default App;