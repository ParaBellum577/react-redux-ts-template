import { createSelector } from 'reselect';
import { IRootState } from 'store';

export const authSelector = (state: IRootState): any => state.auth;

export const isSignedInSelector = createSelector(
  authSelector,
  (auth) => auth.isSignedIn
);
