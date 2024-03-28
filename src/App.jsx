import React from 'react';
import './App.css'
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
        <div>
            <Header />
        </div>
        <div className='main'>
            <TodoForm />
            <TodoList />
        </div>
    </div>
  )
}

export default App;
