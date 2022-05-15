import React from 'react';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/reducer";
import { useFormik } from "formik";
import { State } from '../../store/reducer';
import './second.css';

export function Second() {
  const navigate = useNavigate();
  const todos = useSelector((state: State) => state.todo);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      todo: '',
    },
    onSubmit: values => {
      console.log(dispatch(addTodo(values.todo)))
      console.log(values.todo)
    },
    })

    return (
      <div className="container">
        <div className="heading">
          {/*<img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"/>*/}
          <h1 className="heading__title">To-Do List</h1>
        </div>
        <form className="form">
          <div>
            <label className="form__label" htmlFor="todo">~ Today I need to ~</label>
            <input className="form__input"
                   type="text"
                   id="todo"
                   name="to-do"

                   required />
            <button className="button"><span>Submit</span></button>
          </div>
        </form>
        <div>
          <ul className="toDoList">
          </ul>
        </div>
      </div>

  // <div className={'second-wrapper'}>
  //         <button
  //           onClick={() => navigate('/')}
  //         >
  //           click back
  //         </button>
  //         <div>
  //           {/*<h1>Count</h1>*/}
  //           {/*<button*/}
  //           {/*  onClick={() => dispatch(increment())}*/}
  //           {/*>increment</button>*/}
  //
  //           {/*<button*/}
  //           {/*  onClick={() => dispatch(decrement())}*/}
  //           {/*>decrement</button>*/}
  //           <div className={'input'}>
  //             <form onSubmit={formik.handleSubmit}>
  //               <input
  //                 type="text"
  //                 name="todo"
  //                 onChange={formik.handleChange}
  //                 onBlur={formik.handleChange}
  //                 // onBlur={formik.handleBlur}
  //               />
  //               <button
  //                 type="submit"
  //               >save</button>
  //             </form>
  //             <div>
  //               {todos && todos.map((item: {content: string, done: boolean}, index: number) => (
  //                 <p key={JSON.stringify(item.content + index)}>{item.content}</p>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>
    )
}
