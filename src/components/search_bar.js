import React, {Component} from 'react';

class SearchBar  extends Component {
    state = {term: ''}

    // onInputChange(event){
    //     this.setState({ term: event.target.value})
    // }

    render(){
        return (
            <div>
                <input value={this.state.term} 
                onChange={event => this.setState({ term: event.target.value})}
                />
            </div>
        );
    }
};

export default SearchBar;