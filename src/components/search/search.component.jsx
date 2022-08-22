import {useForm} from 'react-hook-form';

import './search.styles.scss';

const Search = ({setSearchField}) => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return(
        <div className = "search-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    {...register('search', {
                        onChange: (e) => {setSearchField(e.target.value)}
                    })}
                    placeholder = "search todos"  
                />   
            </form>    
        </div>
    )
}

export default Search;