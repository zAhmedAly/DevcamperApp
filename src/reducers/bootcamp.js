// import {
//   GET_BOOTCAMPS,
//   GET_BOOTCAMP,
//   ADD_BOOTCAMP,
//   UPDATE_BOOTCAMP,
//   DELETE_BOOTCAMP,
//   BOOTCAMP_ERROR,
// } from '../actions/types';

const initialState = {
  bootcamps: [],
  bootcamp: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  //const { type, payload } = action;

  switch (action.type) {
    default:
      return state;
  }
}
