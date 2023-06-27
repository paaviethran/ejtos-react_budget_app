import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () =>{
    const {dispatch,currency} = useContext(AppContext)    
    const getCurrency = (event)=>{
        dispatch({
            type: "CHG_CURRENCY",
            payload: event
        })
    }
    list_of_currency = [
        {id:"£", name:"Pounds"},
        {id:"¢", name:"Euro"},
        {id:"$", name:"Dollars"}
    ]
    return(
        <div className="dropdown">
            <button className="btn btn-success  dropdown-toggle" type="button" id="dropdownMenuButton" data-tog>
                Currency:(
                    {list_of_currency.map((opt)=>{
                        if(currency === opt.id){
                            <span>{opt.id}{opt.name}</span>
                        }
                    })}
                )
            </button>
            <div className="dropdown-menu" onChange={(event)=>getCurrency(event.target.value)}>
                <a className="dropdown-item" value="£" href="#" >£ Pounds</a>
                <a className="dropdown-item" value="¢">¢ Euro </a>
                <a className="dropdown-item" value="$">$ Dollars </a>
            </div>
            
            
        </div>
    )
}
export default Currency