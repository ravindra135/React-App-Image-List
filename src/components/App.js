import React from 'react';
import SearchInput from './Searchinput';

// Functional Component converted to class-based Component;
class App extends React.Component {


    constructor(props) {
        super(props)
        
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    // Callback Function on App
    onSearchSubmit(entry) {
        console.log(entry)
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop:'30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
            </div>
        )
    }
    
}

// Making available to the component;
export default App;