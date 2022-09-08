import React from 'react';
import SearchInput from './Searchinput';

// Functional Component;
const App = () => {
    return (
        <div className='ui container' style={{ marginTop:'30px' }}>
            <SearchInput />
        </div>
    )
}

// Making available to the component;
export default App;