import {createSlice} from "@reduxjs/toolkit";
// import { v4 as uuid } from 'uuid';

export interface State {
    // id: string,
    content: string, 
    done: boolean 
}

const initialState = [
  {
    // id: uuid(),
    content: 'make your first todo!',
    done: false,
  },
  {
    // id: uuid(),
    content: 'double click to delete',
    done: false,
  },
  {
    // id: uuid(),
    content: 'click to line-through',
    done: true,
  }
] as State[];



const todoSlice = createSlice({
  name: 'todos',
  initialState: initialState,
  reducers: {
    addTodo(items, action) {
      items.push(action.payload);
      return console.log('added')
    },
    deleteTodo(items, action) {
      // const index = items.findIndex((todo) => todo.id === action.payload);
      items.splice(action.payload, 1);
      return console.log('deleted')
    },
    changeDone(items, action) {
      // const index = items.findIndex((todo) => todo.id === action.payload);
      items[action.payload].done = !items[action.payload].done;
      return console.log('changed')
    }
  },
})

export const { addTodo, deleteTodo, changeDone } = todoSlice.actions;

export default todoSlice.reducer;
