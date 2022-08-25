import React from "react";
import Checkbox from "./Checkbox";

const TaskList = props => {
    const { list, setList } = props;

    //STRING INGRESADO
    const onChangeStatus = e => {
        const { name, checked } = e.target;
        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(updateList);
    }
    
    //BORRAR ITEM
    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
    };
  
    //CHECKBOX
    const chk = list.map(item => (
        <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
    ));

    return (
        <div className="todo-list">
            {list.length ? chk : "No tasks"}
            {list.length ? (
            <p>
                <button className="button blue" onClick={onClickRemoveItem}>
                Delete all done
                </button>
            </p>
            ) : null}
        </div>
    );
};

export default TaskList;