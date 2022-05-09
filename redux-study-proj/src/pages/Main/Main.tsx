import React from 'react';
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../store/reducer";
import {store} from "../../store/toolkit";

export function Main() {
  const navigate = useNavigate();
  const count = useSelector((state: any) => state.data.count)
  const dispatch = useDispatch();

    return (
        <div className={'wrapper-main'}>
            <button
              onClick={() => {
                navigate('/second');
              }}
            >
              Navigate
            </button>
          <div>
            <h1>Count {count}</h1>
            <button
              onClick={() => dispatch(increment())}
            >increment</button>

            <button
              onClick={() => dispatch(decrement())}
            >decrement</button>
          </div>
        </div>
    )
}
