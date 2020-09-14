import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

//output selectors/memoised selectors

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);

