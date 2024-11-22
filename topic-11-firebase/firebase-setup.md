 #Creating a react app with firebase authentication

 ---
 
 ## **to get Firebase configuration object from firebase.com:**
 (need for step 5 in visual studio steps below)
  1. create a project
  2. rehister the app (<> icon)
  3. copy the configuration from under `Add Firebase SDK`

---

## **In visual studio:**
1. Create a react app with firebase authentication 
 `npx create-react-app react-auth-firebase`

 output with helpful commands:
 ```
 To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.

Created git commit.

Success! Created react-auth-firebase at C:\P\C229-Code\W11_Firebase\react-auth-firebase
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-auth-firebase
  npm start

Happy hacking!
```

2. cd into the `react-auth-folder` and start the appliation 
```
cd react-auth-firebase
  npm start
```
- now have a react app with firebase in browser:
![alt text](image.png)

3. install firebase 
`npm i firebase -- save`

4. create a `firebase_setup` folder in `src`

5. create `firebase.js` in this folder and initialize firebase using your Firebase configuration object (Firebase SDK) + import firebase modules 
example:
```
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignout,
} from "firebase/auth";

const firebaseConfig = {
apiKey: "AIzaSyA2xhc_aA8mWuYU34zqEO5AyRztSZpKPZ4",
authDomain: "my-project-1531702898498.firebaseapp.com",
databaseURL: "https://my-project-1531702898498-default-rtdb.firebaseio.com",
projectId: "my-project-1531702898498",
storageBucket: "my-project-1531702898498.appspot.com",
messagingSenderId: "38039037147",
appId: "1:38039037147:web:47d089daa5c016f81298fe",
measurementId: "G-SBPW7H55B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
```
6. need to create 3 functions to authenticate users: signUp, signIn, signOut (see src/firebase_setup/firebase.js)
   
7. create a react form, `signup.js`
  - will collect email + pass from user 
  - create a new component `Signup.js` (see code in file)
  - will track email + password using state 

8. Create the sign-in form (see `Signin.js`)

9. Create the profile page in `profile.js`
  - users will be redirected to this app upon succesful login/authentication

10. need to serve created pages by setting up a `react-router-dom`
  - install it by running:
  `npm i react-router-dom --save`
  - configure it in `index.js` (see file)
  