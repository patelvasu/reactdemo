import "./ExpenseDate.css";
import React from 'react'

const ExpenseDate=(props)=> {
    const months =props.date.toLocaleString('en-US',{month:'long'});
    const year =props.date.getFullYear();
    const day =props.date.toLocaleString('en-US',{day:'2-digit'});
  return (
    <div className="expense-date">
        <div className="expense-date__months">{months}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
    </div>
  )
}

export default ExpenseDate