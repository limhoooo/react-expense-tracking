import React from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

const ExpenseItem = ({ expenses }) => {

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expenses.date} />
            <div className='expense-item__description'>
                <h2>{expenses.title}</h2>
                <div className='expense-item__price'>
                    ${expenses.amount}
                </div>
            </div>

        </Card>

    )
};
export default ExpenseItem;



//export default React.memo(ExpenseItem);
