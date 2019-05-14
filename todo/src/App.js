import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import controller from './reducer/index'
import TodoList from './Component/TodoList';
import TodoForm from './Component/TodoForm';

const store = createStore(controller);

class App extends React.Component 
{
  render(){
    return (
      <div className="App">
      <Provider store={store} >
        <TodoList />
        <TodoForm />
      </Provider>
      </div>
    );
  }
}



export default App;
