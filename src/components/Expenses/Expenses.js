import React from 'react'
import "./Expenses.css"
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
const Expenses=(props)=> {
  return (    
        <Card className='expenses'>
            {
                props.expense.map((item,index)=>{
                    return(
                      <ExpenseItem key={index} expense={item}></ExpenseItem>
                    )
                  })      
            }
        </Card>
  )
}

export default Expenses