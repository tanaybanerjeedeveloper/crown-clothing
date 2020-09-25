import { createSelector } from 'reselect'

//input selector
const selectDirectory = (state) => state.directory

//output/memoised selector
export const selectDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections,
)
