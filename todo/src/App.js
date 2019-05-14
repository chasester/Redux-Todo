import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import controller from './reducer/index'
import TodoList from './Component/TodoList';
import TodoForm from './Component/TodoForm';
import Gradient from './Component/gradient';

const store = createStore(controller);

class App extends React.Component 
{
  render(){
    return (
      <div className="App">
        <div className="container">
          <Provider store={store} >
          <h1>Todo List</h1>
            <Gradient/>
            <TodoList />
            <TodoForm />
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
