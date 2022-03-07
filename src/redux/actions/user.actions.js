import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_REQUEST,
} from '../types';

import axios from 'axios';

export const getUsers = (pageId) => async (dispatch) => {
  dispatch({
    type: GET_USERS_REQUEST,
  });

  try {
    const response = await axios.get(
      `https://randomuser.me/api/?page=${pageId}&results=10`
    );
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: error,
    });
  }
};
