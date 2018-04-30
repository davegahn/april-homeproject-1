import {getUsersRequest, getUsersSuccess, getUsersFailure} from 'actions/users';

const initialState = {
  user: {},
  isFetching: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case getUsersRequest.toString ():
      return {...state, isFetching: true};
    case getUsersSuccess.toString ():
      return {
        ...state,
        isFetching: false,
        user: action.payload,
      };
    case getUsersFailure.toString ():
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
