import React from 'react'
import "./NewExprense.css"
import ExpenseForm from './ExpenseForm'
import{getRandomId} from "../../util/comman"

const NewExprense = (props) => {
  const saveExpenseDataHandler=(expenseData)=>{    
    const saveExpenseData={
      ...expenseData,
      id:getRandomId()
    }
    props.onSaveExpense(saveExpenseData);
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExprense