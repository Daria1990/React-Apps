import React from "react";
import { weekDayNames } from "../../constants";

import "./activity-card.css"

const ActivityCard = ({ imgUrl, activity }) => {

    const getWeekDayNames = (weekDayValues) => {

        let result = '';

        if (weekDayValues) {
            weekDayValues.forEach((value) => {
                const weekDay = weekDayNames.find((el) => el && el.value == value);

                if (weekDay && weekDay.label) {
                    result += `${weekDay.label} `;
                }
            }, this);
           
        }
        
        return result;
    };

    const getAttribute = (object, attributeName) => {
        if (object && object[attributeName]) {
            return object[attributeName];
        }
        else {
            return '';
        }
    };

    return(
        <div className="activity-card">
            <div className="activity-cover">
                <img src={ imgUrl } /> 
            </div>
            <div>
                <h6 className="mb-1">{ getAttribute(activity, "name") }</h6> 
                <small className="font-weight-light">{ `${getWeekDayNames(activity.weekDays)} ${ getAttribute(activity, "startTime") }` }</small> 
                <p className="mb-1">Тренер: { getAttribute(activity, "coach") }</p>
                <p className="mb-1">Возраст: { getAttribute(activity, "minAge") } - { getAttribute(activity, "maxAge") } </p>
                <p className="mb-1">Цена: { getAttribute(activity, "price") }</p> 
                <p className="mb-1">Необходимое снаряжение: { getAttribute(activity, "eqiupment") }</p> 
            </div>
        </div>
    );
};

export default ActivityCard;