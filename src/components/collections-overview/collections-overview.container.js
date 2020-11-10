import { connect } from 'react-redux'
//importig selectors
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shop-selectors'
//importing HOC
import WithSpinner from '../with-spinner/with-spinner'
//importing components
import CollectionsOverview from './collections-overview'
import { compose } from 'redux'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview)

export default CollectionsOverviewContainer
