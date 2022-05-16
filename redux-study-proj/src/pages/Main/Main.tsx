import React from 'react';
import { useNavigate } from "react-router-dom";
import '../../App.css'

export function Main() {
    const navigate = useNavigate();

    return (
        <div className="container-main">
            <div className="heading-main">
                <h1 className="heading-main__title">Лучший инструмент для тайм менеджмента <br/> To-Do List</h1>
            </div>
            <button className="button-main"
                    onClick={() => {
                        navigate('/second');
                    }}><span>Инструмент №1</span></button>

        </div>
    )
}
