import React from 'react';
import ExpenseItems from './ExpenseItems';
import './ExpenseList.css'



const ExpenseList = (props) => {

    if(props.items.length===0){
        return <p className='expenses-list__fallback'>Non sono presenti spese per la data scelta</p>
    }


    return(
        <ul className='expense-list'>
            {props.items.map((expense) => 
            <ExpenseItems 
            key={expense.id} title={expense.title} 
            category={expense.category} amount={expense.amount} 
            date={expense.date} />)}
        </ul>
    )
}

export default ExpenseList;