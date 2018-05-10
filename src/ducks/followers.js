import { handleAction } from 'redux-actions';
import { combineReducers } from 'redux';
import { createActions } from 'redux-actions';

const { fetchUserRequest, fetchUserSuccess, fetchUserFailure } = createActions(
  'FETCH_USER_REQUEST',
  'FETCH_USER_SUCCESS',
  'FETCH_USER_FAILURE',
);

const { fetchTokenOwnerRequest } = createActions('FETCH_TOKEN-OWNER_REQUEST');

const { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } = createActions(
  'FETCH_FOLLOWERS_REQUEST',
  'FETCH_FOLLOWERS_SUCCESS',
  'FETCH_FOLLOWERS_FAILURE',
);

const isFetching = handleAction(
  {
    [fetchFollowersRequest]: () => true,
    [fetchFollowersSuccess]: () => false,
    [fetchFollowersFailure]: () => false,
  },
  false,
);

const isFetched = handleAction(
  {
    [fetchFollowersRequest]: () => false,
    [fetchFollowersSuccess]: () => true,
    [fetchFollowersFailure]: () => true,
    [fetchUserRequest]: () => false,
  },
  false,
);

const ids = handleAction(
  {
    [fetchUserRequest]: (state, action) => [],
    [fetchFollowersRequest]: (state, action) => action.payload,
  },
  [],
);

const error = handleAction(
  {
    [fetchFollowersRequest]: (state, action) => null,
    [fetchFollowersSuccess]: (state, action) => null,
    [fetchFollowersFailure]: (state, action) => action.error,
  },
  null,
);

export default combineReducers({
  ids,
  error,
  isFetched,
  isFetching,
});

export {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  fetchTokenOwnerRequest,
  fetchFollowersRequest,
  fetchFollowersSuccess,
  fetchFollowersFailure,
};

export const getIsFetching = state => state.folllowers.isFetching;
export const getIsFetched = state => state.folllowers.isFetched;
export const getfollowers = state => state.folllowers.ids;
