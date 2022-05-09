import React from 'react';
import { useNavigate } from "react-router-dom";

export function Second() {
  const navigate = useNavigate();
    return (
        <div className={'second-wrapper'}>
          <button
            onClick={() => navigate('/')}
          >
            click back
          </button>
        </div>
    )
}
