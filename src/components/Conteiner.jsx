import React, {useState} from 'react'
import Checkbox from './Checkbox'
import FormTodo from './FormTodo'
import TaskList from './TaskList'


const Container = () => {
    const [list, setList] = useState([]);
  
    const handleAddItem = addItem => {
      setList([...list, addItem]);
      console.log(list);
    };

    return (
      <div>
        <FormTodo handleAddItem={handleAddItem} />
        <TaskList list={list} setList={setList}/>
      </div>
    );
  };

export default Container
