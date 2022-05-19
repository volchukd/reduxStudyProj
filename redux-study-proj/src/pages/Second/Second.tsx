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
    })

    function checked(l: any, item: number){
      l.classList.toggle('through');
      dispatch(changeDone(item))
    }

    console.log(todos)

    

    return (
        <div>
            <div className="container">
                <div className="heading">
                    {/*<img className="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"/>*/}
                    <h1 className="heading__title">To-Do List</h1>
                </div>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <label className="form__label" htmlFor="content">~ Today I need to ~</label>
                    <input className="form__input"
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
                           item.done ? <li onDoubleClick={()=>dispatch(deleteTodo(index))} onClick={(e) => checked(e.target, index)} data-completed={item.done} className='through'>{item.content}</li> :
                           <li onDoubleClick={()=>dispatch(deleteTodo(index))} onClick={(e) => checked(e.target, index)} data-completed={item.done}>{item.content}</li>
                        //    <li onDoubleClick={()=>dispatch(deleteTodo(item.id))} onClick={(e) => checked(e.target, item.id)} data-completed={item.done} >{item.content}</li>
                        ))}

                    </ul>
                </div>
            </div>
                <button className="button-second button"
                        onClick={() => {
                            navigate('/');
                        }}><span>Back</span></button>

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
