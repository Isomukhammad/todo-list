import {useForm} from 'react-hook-form'
import { addList } from '../../utils/dataManipulation';

import './add-item.styles.scss';

const AddItem = ({list, setList}) => {
    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        reset
    } = useForm();

    const onSubmit = (data) => {
        const date = new Date();
        const id = Math.round(date.getTime() / 1000);

        addList(data.description, id).then(data => {
            setList(prevVal => [...prevVal, data[0]])
            reset();
        })
    }

    return(
        <div className='add-item-container'>
            <p>Add new todo...</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register('description', {
                        required: true,
                        minLength: {
                            value: 5,
                            message: 'Minimum 5 letters',
                        }
                    })}  
                />   
                <div>
                    {errors?.description && <p className='error-message'>{errors?.description?.message}</p>}
                </div>
            </form>  
        </div>
    )
}

export default AddItem;