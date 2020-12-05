import React, { Component } from "react";
import { connect } from "react-redux";
import { filterActivities } from "../../actions";
import FilterAge from "./filters/filter-age";
import FilterPrice from "./filters/filter-price";
import FilterStartTime from "./filters/filter-startTime";
import FilterWeekDay from "./filters/filter-weekDay";

import "./filter-panel.css";

class FilterPanel extends Component {

    initialState = {  
        age: null,  
        price: null, 
        startTime: null,
        weekDays: null 
    }

    state = this.initialState;

    handleAgeFilterMouseUp = (event) => {
        this.setState({ age: event.target.value });
    };

    handlePriceFilterMouseUp = (event) => {
        this.setState({ price: event.target.value });
    };

    handleStartTimeFilterCallback = (selectedInterval) => {
        let startTime = [];

        if (selectedInterval[0]) {
            startTime[0] = `${ selectedInterval[0].getHours() }:${selectedInterval[0].getMinutes()}`;
        }

        if (selectedInterval[1]) {
            startTime[1] = `${ selectedInterval[1].getHours() }:${selectedInterval[1].getMinutes()}`;
        }

        this.setState({ startTime: startTime });
    };

    setSelectedWeekDayFilter = (selected) => {
        let weekDays = [];

        if (selected) {
            selected.forEach((s) => weekDays.push(Number(s.value)), this);
        }

        this.setState({ weekDays: weekDays });
    };

    useFilterClick = () => {
        this.props.filterActivities(this.state);
    };

    cancelFilterClick = () => {
        this.props.filterActivities(this.initialState);
    };

    render() {

        return (
            <div className="filter-panel">
                <FilterAge onMouseUp={ this.handleAgeFilterMouseUp } />
                <FilterPrice onMouseUp={ this.handlePriceFilterMouseUp } />
                <FilterStartTime onChangeCallback ={ this.handleStartTimeFilterCallback }/>
                <FilterWeekDay onChange = { this.setSelectedWeekDayFilter }/>
                <div className="filter-panel-buttons">
                    <button onClick={ this.useFilterClick } className="btn btn-light">
                        Применить
                    </button>
                    <button onClick={ this.cancelFilterClick } className="btn btn-light">
                        Сбросить
                    </button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = ({ visibleItems, filter }) => {
    return({
        visibleItems, filter
    });
};

const mapDispatchToProps = {
    filterActivities
};
  

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);