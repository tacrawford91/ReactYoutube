import React, {Component} from 'react';

// Below is functional component because it is literally in a function. 
//Not a class/constructor - limited in its use
// const SearchBar = () => {
//     return <input />
// };

class SearchBar extends Component{
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }
    render() {
        return (
        <div className="search-bar">
            <input
            onChange ={event => this.onInputChange(event.target.value)} 
            value={this.state.term}
            />
        </div>
        );
    };
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    };
};


export default SearchBar;


// onChange ={event => this.setState({ term: event.target.value})}>