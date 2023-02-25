import React, { useState } from "react"
import Card from "./UI/Card"
import ExpensesFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {

    const [yearSelected, setYearSelected] = useState('2023');
    const selectedYearHandler = (userSelection) => {""
        setYearSelected(userSelection);
    }

    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === yearSelected
    })
    


    return (
        <Card className='container'>
            <ExpensesFilter selected={yearSelected} onChangeFilter={selectedYearHandler} />
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
        </Card>
    )
};

export default Expenses;