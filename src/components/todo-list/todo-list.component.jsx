import { useEffect, useState } from "react";
import { addList, getList } from "../../utils/dataManipulation";
import ToDoItem from "../todo-item/todo-item.component";

const ToDoList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getList().then(data => setList(data));
    }, [])

    return(
        <div className="todo-list">
        {
            list.map(task => (
                <ToDoItem key = {task.id} title = {task.title}/>
            ))
        }
        </div>
    )
}

export default ToDoList;