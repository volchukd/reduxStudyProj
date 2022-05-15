import React from 'react';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../store/reducer";
import { useFormik } from "formik";

export function Second() {
  const navigate = useNavigate();
  const todos = useSelector((state: any) => state.todo.todo);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      todo: '',
    },
    onSubmit: values => {
      dispatch(addTodo(values.todo))
      console.log(values.todo)
    },
    })

    return (
        <div className={'second-wrapper'}>
          <button
            onClick={() => navigate('/')}
          >
            click back
          </button>
          <div>
            {/*<h1>Count</h1>*/}
            {/*<button*/}
            {/*  onClick={() => dispatch(increment())}*/}
            {/*>increment</button>*/}

            {/*<button*/}
            {/*  onClick={() => dispatch(decrement())}*/}
            {/*>decrement</button>*/}
            <div className={'input'}>
              <form onSubmit={formik.handleSubmit}>
                <input
                  type="text"
                  name="todo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
                <button
                  type="submit"
                >save</button>
              </form>
              <div>
                {todos && todos.map((item: any) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
}

