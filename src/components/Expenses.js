import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "./Card";
import ExpenseFilter from "./NewExpense/ExpenseFilter/ExpenseFilter";

function Expenses(props){
    const[filteredYear,setFilteredYear]=useState('')
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

const filteredExpenses = props.item.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear;
})

return(
    <div>
    <Card className="expenses">
    <ExpenseFilter onChangeFilter={filterChangeHandler} />
    {filteredExpenses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
    </Card>
    </div>
)
}

export default Expenses;