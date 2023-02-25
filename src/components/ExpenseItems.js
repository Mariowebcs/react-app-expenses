import React from 'react'
import './ExpenseItems.css'
import ExpenseDate from './ExpenseDate'
import Card from './UI/Card';


function ExpenseItems(props) {
    
    return (
        <Card className="expense-item">
            <div>
                <ExpenseDate date={props.date} />
            </div>
            <div className="expense-item__description">
                <h2 className="expense-item__title">{props.title}</h2>
                <h2 className='no-mobile'>{props.category && "CATEGORIA :"} {props.category}</h2>
                <div className="expense-item__price">{props.amount} <span>€</span></div>
            </div>
        </Card>
    )
};

export default ExpenseItems;