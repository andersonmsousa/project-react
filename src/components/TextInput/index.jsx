import './styles.css';

function TextInput({ searchValue, handleChange }) {
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

export default TextInput;