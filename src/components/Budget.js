
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,currency,dispatch,expenses} = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total,item)=>{
        return total += item.cost
    },0)

    const updateBudget = (event)=>{
        if(event <= totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
            event = totalExpenses;
            return;
        }
        dispatch({
            type:"SET_BUDGET",
            payload:event
        })
    } 
    return (
        <div className='alert alert-secondary'>
            Budget:{currency}<input max="20000" min={totalExpenses} step="10" value={budget} type="number" onChange={event=>updateBudget(event.target.value)}></input>
        </div>
    );
};
export default Budget;