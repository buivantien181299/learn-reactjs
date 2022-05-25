import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss';
TodoList.propTypes = {
    toDoList: PropTypes.array,
    onToDoClick: PropTypes.func,
};

TodoList.defaultProps = {
    toDoList: [],
    onToDoClick: null
}

function TodoList({ toDoList, onToDoClick }) {
    const handleToDoClick = (todo, idex) => {
        if (!onToDoClick) return;
        onToDoClick(todo, idex);
    };
    return (
        <ul className='todo-list'>
            {toDoList.map((todo, idex) => (
                <li
                    key={todo.id}
                    className={classnames({
                        'todo-item': true,
                        completed: todo.status === 'completed'
                    })}

                    onClick={() => handleToDoClick(todo, idex)}

                >{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;