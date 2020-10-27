import { createSelector } from 'reselect'
import memoize from 'lodash.memoize'

// const COLLECTION_TO_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5,
// }

//input selector
const selectShop = (state) => state.shop

//output selector
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
)

export const selectCollectionsPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : [],
) //this selector converts the 'collections' obj into an array of objects.

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam],
  ),
)
