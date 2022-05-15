import {createAction, createSlice} from "@reduxjs/toolkit";

const initialState = [
  {
    content: 'todolist',
    done: false,
  },
  {
    content: 'todolist',
    done: false,
  },
];

export interface State {
  todo: {content: string, done: boolean}[];
}

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    addTodo(items: any, action: any) {
      const item = {
        content: action.payload,
        done: false,
      };
      return [...items, item]
    }
  },
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
