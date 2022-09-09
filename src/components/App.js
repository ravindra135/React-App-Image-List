import axios from 'axios';
import React from 'react';
import SearchInput from './Searchinput';
import ImageList from './ImageList';

// Functional Component converted to class-based Component;
class App extends React.Component {


    constructor(props) {
        super(props)
        
        this.state = { images: [] }
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }

    // Callback Function on App
    async onSearchSubmit(entry) {
       const response = await axios.get(`https://pixabay.com/api/?key=12441692-8b547b10cfa32c04a4e52f32d&q=${entry}&image_type=photo`)
       this.setState({images: response.data.hits})
    }

    render() {
        return (
            <div className='ui container' style={{ marginTop:'30px' }}>
                <SearchInput onSearchSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images}/>
            </div>

        )
    }
    
}

// Making available to the component;
export default App;