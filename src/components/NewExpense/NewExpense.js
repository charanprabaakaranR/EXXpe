import React ,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './newExpense.css';

const NewExpense = (props) => {
    const[isEditing , setisEditing] = useState(false);

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () =>{
        setisEditing(true);
    };

    const stopEditingHandler = () =>{
        setisEditing(false);
    }

    return <div className='new-expense'>
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseHandler} onCancel={stopEditingHandler} />}
    </div>

};

export default NewExpense;