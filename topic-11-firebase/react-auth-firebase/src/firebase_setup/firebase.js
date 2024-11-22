// initialize firebase, import firebase modules and add firebase SDK configuration from firebase.com

// import firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignout,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeHP28Ta8ceyLhnR9owcXmwyWhJo-xTEs",
  authDomain: "fir-test-project-2fe7d.firebaseapp.com",
  projectId: "fir-test-project-2fe7d",
  storageBucket: "fir-test-project-2fe7d.firebasestorage.app",
  messagingSenderId: "876729847802",
  appId: "1:876729847802:web:9ac48fc57534df1bc65e43",
  measurementId: "G-CPBGBNJQYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// sign up
  // Firebase will check if email is already in use for you!
const signUp = async (email, password) => {
    try {
    // userCredential is an object with the user details 
      const userCredential = await createUserWithEmailAndPassword(
        auth, // auth object from firebase
        email,
        password
      );
      const user = userCredential.user;
      await addDoc(collection(db, "users"), { uid: user.uid, email: user.email }); //adding this user to the "users" collection - firestore will create this collection if it doesnt already exist 
      return true; // returns true if new user created 
    } catch (error) {
      return { error: error.message };
    }
}; 

// sign in
  // passes email + password to the signInWithEmailAndPassword function, to sign in a registered user 
const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(  
        auth, // auth object from firebase passed here
        email,
        password
      );
      const user = userCredential.user; //returns user object if email + pass match 
      return true; // returns true if email + pass correct
    } catch (error) {
      return { error: error.message };
    }
  };
  
// sign out
const signOut = async () => {
    try {
      await firebaseSignout(auth); // calls sign out function from firebase, pass auth object
      return true;
    } catch (error) {
      return false;
    }
  };
  
  export { app, signUp, signIn, signOut };



//this is my firebase SDK configuration straight from firebase.com: (above code has been modified to import the necessary modules)

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAeHP28Ta8ceyLhnR9owcXmwyWhJo-xTEs",
//   authDomain: "fir-test-project-2fe7d.firebaseapp.com",
//   projectId: "fir-test-project-2fe7d",
//   storageBucket: "fir-test-project-2fe7d.firebasestorage.app",
//   messagingSenderId: "876729847802",
//   appId: "1:876729847802:web:9ac48fc57534df1bc65e43",
//   measurementId: "G-CPBGBNJQYE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);