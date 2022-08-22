import { useEffect, useState } from "react";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './todo-item.styles.scss';
import { addList, deleteList } from "../../utils/dataManipulation";

const ToDoItem = ({id, title, list, setList}) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState(title);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const deleteFromList = () => {
        setList(list.filter((task) => {
            return task.id !== id;
        }))
    }

    return(
        <div className="todo-item-container">
            <div className="todo-item-container">{title}</div>
            
            <div className="delete-icon" onClick = {deleteFromList}>
                <DeleteOutlineIcon/>
            </div>
        </div>
    )
}

export default ToDoItem;