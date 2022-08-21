import {useForm} from 'react-hook-form'

import './add-item.styles.scss';

const AddItem = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

    return(
        <div className='add-item-container'>
            <p>Add new todo...</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register('description')}  
                />   
            </form>  
        </div>
    )
}

export default AddItem;