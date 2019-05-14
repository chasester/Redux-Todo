import React from "react";

import { connect } from 'react-redux';
import { addTodo, removeTodo, changeTodo } from '../actions';

class TodoForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            value: ""
        }
    }

    handleSubmit()
    {
        let val = this.state.value;
        this.setState({value: ""})
        this.props.addTodo(val);
    }

    render()
    {
        return (
            <input placeholder= "What do you need to get done?" value={this.state.value} onChange={(e)=> this.setState({value: e.target.value})} onKeyPress={(e)=> { if(e.charCode === 13)this.handleSubmit()}} maxLength="50" size="50"/>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo, removeTodo, changeTodo })(TodoForm);