import React from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(counter);

function App() {
  return (
    <div className="App">
    <Provider store={store} >
      hello world
    </div>
    </Provider>
  );
}

export default App;
