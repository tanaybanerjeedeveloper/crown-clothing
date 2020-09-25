import React from 'react'
import './shoppage.styles.scss'
import { Route } from 'react-router-dom'
//importing components
import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collectionpage/collectionpage'

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
}

export default ShopPage
