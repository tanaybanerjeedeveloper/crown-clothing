import React from 'react'
import './collections-overview.styles.scss'
import { connect } from 'react-redux'
//importing components
import CollectionPreview from '../collection-preview/collection-preview'
//importing selectors
import { createStructuredSelector } from 'reselect'
import { selectCollectionsPreview } from '../../redux/shop/shop-selectors'

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />
      })}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
})

export default connect(mapStateToProps, null)(CollectionsOverview)
