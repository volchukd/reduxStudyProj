import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: ['Empty todo'],
}

interface State {
  count: number,
  todos: any[];
}

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');

export default createReducer(initialState, {
  // @ts-ignore
  [increment]:  function (state: State) {
    state.count = state.count + 1
  },
  // @ts-ignore
  [decrement]:  function (state: State) {
    state.count = state.count - 1
  },
})

console.log(decrement);