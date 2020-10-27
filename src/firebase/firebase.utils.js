import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCHrg5w7sg647ltHfkpFjfKr5bDdnFmcvo',
  authDomain: 'crown-db-187eb.firebaseapp.com',
  databaseURL: 'https://crown-db-187eb.firebaseio.com',
  projectId: 'crown-db-187eb',
  storageBucket: 'crown-db-187eb.appspot.com',
  messagingSenderId: '534527915794',
  appId: '1:534527915794:web:c073c0aa31dcef19e365cb',
  measurementId: 'G-3Q5GMDGQ6Y',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return
  } //i.e. if there is no user

  const userRef = firestore.doc(`users/${userAuth.uid}`) //this is the documentReference
  const snapShot = await userRef.get() //getting the objectSnapshot

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account ' })
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
      const errorCode = error.code

      console.log(errorCode)

      const errorMessage = error.message

      console.log(errorMessage)
    })

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()

    batch.set(newDocRef, obj)
  })
  return await batch.commit()
} //this function is to create the 'shop-data' collection

export const convertCollectionSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    }
  })

  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}

export default firebase
