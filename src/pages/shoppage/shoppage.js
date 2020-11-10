import React from 'react'
import './shoppage.styles.scss'
import { Route } from 'react-router-dom'
//importing components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collectionpage/collectionpage.container'
//importing actions
import { fetchCollectionsStart } from '../../redux/shop/shop-actions'
//connecting to redux store
import { connect } from 'react-redux'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { fetchCollectionsStart } = this.props
    fetchCollectionsStart()
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  }
}

export default connect(null, mapDispatchToProps)(ShopPage)
