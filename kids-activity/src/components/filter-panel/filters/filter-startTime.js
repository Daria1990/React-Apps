import React, { Component } from 'react';  
import { endOfToday, set } from 'date-fns';
import TimeRange from 'react-timeline-range-slider'; 
import { START_WORK_TIME, END_WORK_TIME } from "../../../constants"; 

import "./filter-startTime.css";
 

const getTodayAtSpecificHour = (hour = 0) => {
    const now = new Date();
    return set(now, { hours: hour, minutes: 0, seconds: 0, milliseconds: 0 })
};

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
  }
 
const selectedStart = getTodayAtSpecificHour(START_WORK_TIME);
const selectedEnd = getTodayAtSpecificHour(END_WORK_TIME);
 
const startTime = getTodayAtSpecificHour()
const endTime = endOfToday(24)
 
const disabledIntervals = [
  { start: getTodayAtSpecificHour(0), end: getTodayAtSpecificHour(START_WORK_TIME) },
  { start: getTodayAtSpecificHour(END_WORK_TIME), end: getTodayAtSpecificHour(24) }
]
 
class FilterStartTime extends Component {  
    state = {  
        error: false,  
        selectedInterval: [selectedStart, selectedEnd],  
    }
    
    errorHandler = ({ error }) => this.setState({ error })  
 
    onChangeCallback = (selectedInterval) => {
        this.setState({ selectedInterval });
        this.props.onChangeCallback(selectedInterval);
    };
 
    render() {  
        const { selectedInterval, error } = this.state;

        const { onChangeCallback } = this.props;

        return (  
            <div className="mb-4">
                <h5>Выбрать время</h5>
                <TimeRange 
                    error={error}  
                    ticksNumber={12}  
                    containerClassName="activity-react_time_range__time_range_container"
                    selectedInterval={ selectedInterval }  
                    timelineInterval={ [startTime, endTime] }  
                    onUpdateCallback={ this.errorHandler }  
                    onChangeCallback={ this.onChangeCallback }
                    disabledIntervals={ disabledIntervals }  
                />
            </div>
        )  
    }  
}  
 
export default FilterStartTime;