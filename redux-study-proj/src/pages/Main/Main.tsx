import React from 'react';
import { useNavigate } from "react-router-dom";

export function Main() {
  const navigate = useNavigate();

    return (
        <div className={'wrapper-main'}>
            <button onClick={ () => {navigate('/second')} }>
              Инструмент №1
            </button>
        </div>
    )
}
