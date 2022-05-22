import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    toDoList: PropTypes.array,
};

TodoList.defaultProps = {
    toDoList: [],
}

function TodoList({ toDoList }) {
    return (
        <ul>
            {toDoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;