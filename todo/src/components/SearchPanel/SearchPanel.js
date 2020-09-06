import React, {Component} from "react";
import "./SearchPanel.css";

export default class SearchPanel extends Component {
    
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState( {term} );
        this.props.onSearchChange(term);
    };

    render () {
        return (
            <input type="text" className="search-input form-control" 
                onChange={this.onSearchChange} placeholder="type to search" 
                value={this.state.term}/>
        )
    }
};
