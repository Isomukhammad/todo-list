import { useEffect, useState } from "react";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './todo-item.styles.scss';
import { addList } from "../../utils/dataManipulation";

const ToDoItem = ({title}) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState(title);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return(
        <div className="todo-item-container">
            <input 
                type="text" 
                disabled = {isDisabled} 
                value = {name} 
                onChange = {handleChange}
            />
            
            <div className="delete-icon" onClick = {addList}>
                <DeleteOutlineIcon/>
            </div>
        </div>
    )
}

export default ToDoItem;