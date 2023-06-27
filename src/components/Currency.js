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
        <div className="" style={{
            color:"white",
            padding:'1rem',
            backgroundColor:"mediumseagreen",
            borderRadius:'5px'
        }} >Currency(
            <select className="" name="currency" id="currency" onChange={(event)=>getCurrency(event.target.value)} style={{
                background:"transparent",
                border:"none",
                outline:"none",
                color:"white"
            }}>
                <option className="select-items" value="£" >£ Pounds</option>
                <option value="$" >$ Dollars</option>
                <option value="⍷" >⍷ Euro</option>
                <option value="₹" >₹ Rupee</option>
            </select> 
        )
        </div>
    )
}
export default Currency