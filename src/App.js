import React from 'react';
import './App.scss';
import Container from './components/Conteiner';
import FormTodo from './components/FormTodo';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Container/>
      <FormTodo/>
      <TaskList/>
    </div> 
  );
}

export default App;
