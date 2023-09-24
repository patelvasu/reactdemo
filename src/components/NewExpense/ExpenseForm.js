import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [addExpense,setAddExpense]=useState({
        title:"",
        amount:0,
        date:new Date()
    })
   const onchangeInput=(e)=>{
    const { name, value } = e.target;
    setAddExpense({
        ...addExpense,
        [name]:value
    });
   }    
   const submiForm=(e)=>{
    e.preventDefault();
    addExpense.date=new Date(addExpense.date);
    props.onSaveExpenseData(addExpense);
    setAddExpense({
        title:"",
        amount:0,
        date:new Date()
    })        
   } 
  return (
    <form onSubmit={submiForm}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" name="title" value={addExpense.title} onChange={onchangeInput}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" name="amount" value={addExpense.amount} min="1" step="1" onChange={onchangeInput}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" name="date" value={addExpense.date} onChange={onchangeInput}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm