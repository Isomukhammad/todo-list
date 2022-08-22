import { useEffect, useState } from "react";
import { addList, getList } from "../../utils/dataManipulation";
import ToDoItem from "../todo-item/todo-item.component";

import './todo-list.styles.scss';

const ToDoList = ({list, setList}) => {
    return(
        <div className="todo-list-container">
        {
            list.map(task => (
                <ToDoItem key = {task.id} id = {task.id} title = {task.title} list = {list} setList = {setList}/>
            ))
        }
        </div>
    )
}

export default ToDoList;