import React from 'react';

import { connect } from 'react-redux';
import { addTodo, removeTodo, changeTodo } from '../actions';

class TodoList extends React.Component
{
    render()
    {
        return (<div className="todo-list">
            {
                this.props.todos.map((x,i)=> 
                    <div onClick={() => this.props.changeTodo(x.id)} className="todo" key={i}>
                        {x.status ? <strike>{x.name}</strike> : <span>{x.name}</span>}
                        <button onClick={() => this.props.removeTodo(x.id)}>x</button>
                    </div> 
                )
            }
        </div>);
    }
}

const mapStateToProps = (state) =>
{
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo, removeTodo, changeTodo })(TodoList);