import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { currency, budget, dispatch } = useContext(AppContext);

    const updateBudget = (val) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: val
        })
    }
    return (
        <div className='alert alert-primary'>
            <span>
                Cart Value: {currency} <input
                required='required'
                type='number'
                min={1}
                max={20000}
                id='cost'
                value={budget}
                style={{size: 20}}
                onChange={(event) => updateBudget(event.target.value)}>
                        </input>

            </span>
        </div>
    )
}

export default Budget;
