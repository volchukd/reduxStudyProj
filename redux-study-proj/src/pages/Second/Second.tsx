import React from 'react';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, changeDone } from "../../store/reducer";
import { useFormik } from "formik";
import { RootState } from '../../store/toolkit';

import { v4 as uuid } from 'uuid';

export function Second() {
  const navigate = useNavigate();

  const todos = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
    //   id: uuid(),
      content: '',
      done: false
    },
    onSubmit: values => {
    dispatch(addTodo(values))
    },
    });

    function checked(listItem: any, index: number){
      listItem.classList.toggle('through');
      dispatch(changeDone(index))
    }

    console.log(todos);



    return (
        <div>
            <div className="container">
                <div className="heading">
                    <h1 className="heading__title">To-Do List</h1>
                </div>

                <form className="form" onSubmit={formik.handleSubmit}>
                    <label className="form__label" htmlFor="content">~ Today I need to ~</label>
                    <input
                      className="form__input"
                      type="text"
                      id="content"
                      name="content"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      required
                    />
                    <button className="button"><span>Submit</span></button>
                </form>

                <div>
                    <ul className="toDoList">
                        {todos.map((item, index) => (
                           item.done
                             ? (
                                 <li
                                   onDoubleClick={()=>dispatch(deleteTodo(index))}
                                   onClick={(e) => checked(e.target, index)}
                                   data-completed={item.done}
                                   className='through'
                                 >
                                   {item.content}
                                 </li>
                              )
                             : (
                                 <li
                                   onDoubleClick={()=>dispatch(deleteTodo(index))}
                                   onClick={(e) => checked(e.target, index)}
                                   data-completed={item.done}
                                 >
                                   {item.content}
                                 </li>
                              )
                        ))}

                    </ul>
                </div>
            </div>

                <button
                  className="button-second button"
                  onClick={() => {
                    navigate('/');
                  }}
                >
                  <span>Back</span>
                </button>
        </div>
    )
}
