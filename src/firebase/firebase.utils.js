import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHrg5w7sg647ltHfkpFjfKr5bDdnFmcvo",
  authDomain: "crown-db-187eb.firebaseapp.com",
  databaseURL: "https://crown-db-187eb.firebaseio.com",
  projectId: "crown-db-187eb",
  storageBucket: "crown-db-187eb.appspot.com",
  messagingSenderId: "534527915794",
  appId: "1:534527915794:web:c073c0aa31dcef19e365cb",
  measurementId: "G-3Q5GMDGQ6Y",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
// export const signInWithGoogle = () =>
//   auth.signInWithPopup(provider).catch(function (error) {
//     const errorCode = error.code;
//     console.log(errorCode);
//     const errorMessage = error.message;
//     console.log(errorMessage);
//   });
export const signInWithGoogle = () =>
  auth

    .signInWithPopup(provider)

    .catch(function (error) {
      const errorCode = error.code;

      console.log(errorCode);

      const errorMessage = error.message;

      console.log(errorMessage);
    });

export default firebase;
