import React from 'react'
import './shoppage.styles.scss'
import { Route } from 'react-router-dom'
//importing components
import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collectionpage/collectionpage'
//importing firestore
import {
  firestore,
  convertCollectionSnapshotToMap,
} from '../../firebase/firebase.utils'
//importing actions
import { updateCollections } from '../../redux/shop/shop-actions'
//connecting to redux store
import { connect } from 'react-redux'
//importing HOC
import WithSpinner from '../../components/with-spinner/with-spinner'

//wrapping the components with 'WithSpinner' HOC, so that these components are wrapped around spinning facility.
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
    }
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then((snapShot) => {
      const collectionMap = convertCollectionSnapshotToMap(snapShot)
      console.log('collectionMap', collectionMap)
      updateCollections(collectionMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props
    const { loading } = this.state
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collectionMap) =>
      dispatch(updateCollections(collectionMap)),
  }
}

export default connect(null, mapDispatchToProps)(ShopPage)
