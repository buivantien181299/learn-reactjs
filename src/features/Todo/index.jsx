import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

ToDoFeatrue.propTypes = {

};

function ToDoFeatrue(props) {
    const toDoList = [
        {
            id: 1,
            title: 'Eat'
        },
        {
            id: 2,
            title: 'Code'
        },
        {
            id: 3,
            title: 'Sleep'
        }
    ]
    return (
        <div>
            <TodoList toDoList={toDoList} />
        </div>
    );
}

export default ToDoFeatrue;