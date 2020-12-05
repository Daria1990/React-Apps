import React, { Component } from "react";
import { connect } from "react-redux";
import reducer from "../../reducers";
import { searchActivities } from "../../actions";

class SearchPanel extends Component {
    
    handleOnInputChange = (event) => {
        const term = event.target.value;
        this.props.searchActivities(term);
    };
        
    render() {
        return(
            <div>
                <input className="form-control mb-4" type="search" 
                    onChange={ this.handleOnInputChange } placeholder="Поиск" />
            </div>
        )
    }
};

const mapStateToProps = ({ visibleItems, term }) => {
    return({
        visibleItems, term
    });
};

const mapDispatchToProps = {
    searchActivities
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);