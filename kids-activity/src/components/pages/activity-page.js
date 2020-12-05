import React, { useContext } from "react";
import ActivityList from "../activity-list";
import SearchPanel from "../search-panel";
import FilterPanel from "../filter-panel";
import ActivityServiceContext from "../activity-service-context";

import "./activity-page.css";

const ActivityPage = () => {
    const activityServiceContext = useContext(ActivityServiceContext);

    return(
        <div>
            <div className="flex-activity-container">
                <div className="activity-filter">
                    <SearchPanel />
                    <FilterPanel />
                </div>
                <div className="activity-list">
                    <ActivityList activityService={ activityServiceContext } />
                </div>
            </div>
        </div>
    );
};

export default ActivityPage;