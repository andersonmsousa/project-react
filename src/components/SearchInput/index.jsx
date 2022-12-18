import './styles.css';

function SearchInput({ searchValue, handleChange }) {
    return (
            <input 
                className='text-input' 
                type="search" 
                onChange={handleChange} 
                value={searchValue} 
                placeholder='Type your search'
            />
    )
}

export default SearchInput;