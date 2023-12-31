import "./ExpenseItem.css"
import React from 'react'
import ExpenseDate from "./ExpenseDate"
import Card from '../UI/Card';


const ExpenseItem=(props)=> {   

  return (
    <Card key={props.expense.id} className="expense-item">
        <ExpenseDate date={props.expense.date}/>
        <div className="expense-item__description">
            <h2>{props.expense.title}</h2>
            <div className="expense-item__price">${props.expense.amount}</div>
        </div>        
    </Card>
  )
}

export default ExpenseItem