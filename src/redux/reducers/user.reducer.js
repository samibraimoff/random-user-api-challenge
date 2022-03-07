import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
} from '../types';

const initialState = {
  list: [],
  item: null,
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
