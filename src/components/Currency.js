import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () =>{
    const {dispatch} = useContext(AppContext)    
    const getCurrency = (event)=>{
        dispatch({
            type: "CHG_CURRENCY",
            payload: event
        })
    }

    return(
        <div className="alert alert-success" >
            <span>Currency(
            <select className="input-group-prepend" id="inputGroupSelect01" onChange={(event) => getCurrency(event.target.value)}>
                <option defaultValue value="£" name="dollars">Pounds</option>
                <option value="⍷" name="euro"> Euro</option>
                <option value="$" name="pounds">Dollars</option>
                <option value="₹" name="rupee">Rupee</option>
            </select>
            )</span>
        </div>
    )
}
export default Currency