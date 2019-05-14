import React from 'react';

import { connect } from 'react-redux';
import { addTodo, removeTodo, changeTodo } from '../actions';

class TodoList extends React.Component
{
    render()
    {
        return (<ul className="todo-list">
            {
                this.props.todos.map((x,i)=> 
                    <li onClick={() => this.props.changeTodo(x.id)} className="todo-item" key={i}>
                        {x.status ? <strike>{x.name}</strike> : <span>{x.name}</span>}
                        <button onClick={() => this.props.removeTodo(x.id)} >remove</button>
                    </li> 
                )
            }
        </ul>);
    }
}

const mapStateToProps = (state) =>
{
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo, removeTodo, changeTodo })(TodoList);