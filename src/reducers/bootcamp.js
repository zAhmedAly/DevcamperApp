import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from '../actions/types';

const initialState = {
  bootcamps: [],
  bootcamp: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {}
