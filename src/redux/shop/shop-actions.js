import ShopActionTypes from './shop-types'
//importing for firestore
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'

export const fetchCollectionsStart = () => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
  }
}

export const fetchCollectionsSuccess = (collectionMap) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap,
  }
}

export const fetchCollectionsFailure = (errorMessage) => {
  return {
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage,
  }
}
//this is the Async action creater
export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('collections')
    dispatch(fetchCollectionsStart())

    collectionRef
      .get()
      .then((snapShot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapShot)
        console.log('collectionMap', collectionMap)
        dispatch(fetchCollectionsSuccess(collectionMap))
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)))
  }
}
