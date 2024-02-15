import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList = () => {
    const {dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        })
    }
    return (
        <div className='alert alert-success'> Currency {
            <select style={{backgroundColor: "#d1e7dd", borderColor: "#d1e7dd"}} name="Location" id="Location" onChange={event=>changeCurrency(event.target.value)}>
                <option value="$">Dollar($)</option>
                <option value="£">Pound(£)</option>
                <option value="€">Euro(€)</option>
                <option value="₹">Ruppee(₹)</option>
            </select>
        }
        </div>
    );
};

export default CurrencyList;