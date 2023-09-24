import React from 'react'
import { useState } from "react";
import Expenses from "./Expenses";
import NewExprense from "../NewExpense/NewExprense";

function ExpenseHome() {
    const [expenselist,setExpenseList]=useState([
        {
          id:"e1",
          title:"Home loan",
          amount:13600,
          date:new Date(2023,9,5)
        },
        {
          id:"e2",
          title:"Persnol Loan",
          amount:16900,
          date:new Date(2023,9,15)
        },
        {
          id:"e3",
          title:"Mutul Fund",
          amount:12000,
          date:new Date(2023,9,6)
        },
        {
          id:"e2",
          title:"LIC",
          amount:4000,
          date:new Date(2023,9,9)
        }    
      ]);
      const addExpenseHandler=(expenseData)=>{
        const saveExpense=[
          ...expenselist,
          expenseData
        ]
        setExpenseList(saveExpense);
      }
      return (
        <div>
          <h2>Let's Start Project</h2>
          <NewExprense onSaveExpense={addExpenseHandler}/>
          <Expenses expense={expenselist}/>
        </div>
      );
}

export default ExpenseHome

