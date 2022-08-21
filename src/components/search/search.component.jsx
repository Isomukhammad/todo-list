import {useForm} from 'react-hook-form';

import './search.styles.scss';

const Search = () => {
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
        <div className = "search-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register('description')}  
                    placeholder = "search todos"  
                />   
            </form>    
        </div>
    )
}

export default Search;