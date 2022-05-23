import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';


ToDoFeatrue.propTypes = {

};

function ToDoFeatrue(props) {
    const initToDoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new',
        }
    ];

    const [toDoList, setToDoList] = useState(initToDoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleToDoClick = (todo, idex) => {
        const newToDoList = [...toDoList];

        newToDoList[idex] = {
            ...newToDoList[idex],
            status: newToDoList[idex].status === 'new' ? 'completed' : 'new',
        }

        setToDoList(newToDoList);
    };

    const handleShowAllClick = () => {
        setFilterStatus('all');
    };
    const handleShowCompletedClick = () => {
        setFilterStatus('completed');
    };
    const handleShowNewClick = () => {
        setFilterStatus('new');
    };

    const renderedTodoList = toDoList.filter(todo => filterStatus === 'all' || filterStatus === todo.status);

    return (
        <div>
            <h3>To do list</h3>
            <TodoList toDoList={renderedTodoList} onToDoClick={handleToDoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show all</button>
                <button onClick={handleShowCompletedClick}>Show completed</button>
                <button onClick={handleShowNewClick}>Show new</button>
            </div>
        </div>
    );
}

export default ToDoFeatrue;