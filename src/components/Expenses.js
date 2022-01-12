import React from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
const Expenses = ({ expenses }) => {
    return (
        <Card className='expenses'>
            {
                expenses.map(item =>
                    <ExpenseItem expenses={item} key={item.key} />
                )
            }
        </Card>
    )
}

export default Expenses;