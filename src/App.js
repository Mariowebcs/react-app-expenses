import React, { useState } from 'react';
import Expenses from './components/Expenses'
import NewExpense from './components/NewExpense/NewExpense';
 
const Stat_Expenses = [
    { id: 1, title: 'Assicurazione auto', amount: 450, date: new Date(2020,7,14) },
    { id: 2, title: 'Pizza a domicilio', amount: 25, date: new Date(2020,4,14) },
    { id: 3, title: 'Benzina', amount: 225, date: new Date(2021,6,12) },
    { id: 4, title: 'Tagliando auto', amount: 120, date: new Date(2021,5,12) },
    { id: 5, title: 'Acquisto smartphone', amount: 180, date: new Date(2022,4,14) },
    { id: 6, title: 'Serata in discoteca', amount: 60, date: new Date(2022,8,14) },
    { id: 7, title: 'Bolletta della luce', amount: 110, date: new Date(2019,3,14) },
    { id: 8, title: 'Grigliata con amici', amount: 45, date: new Date(2019,9,14) },
    { id: 9, title: 'Bolletta internet', amount: 59.99, date: new Date(2023,2,14) },
    { id: 10, title: 'Giornata al mare', amount: 75, date: new Date(2023,8,14) },
]


export default function App() {
    const [expenses, setExpenses] = useState(Stat_Expenses);

    const addDataExpenseHandler = (expense)=>{
        setExpenses((prevExpenses)=>{
            return [expense, ...prevExpenses];
        })
        console.log(expenses);
    } 

    console.log(expenses);


    return (
        <div className='main-container'>
            <NewExpense  onAddExpense={addDataExpenseHandler}/>
            <Expenses items={expenses}/>
        </div>

    )
};

