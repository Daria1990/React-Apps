import React, { useReducer, useEffect }  from "react";
import ActivityCard from "../activity-card";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator"
import reducer from "../../reducers";
import { activitiesLoaded, activitiesError, activitiesRequested } from "../../actions";
import { connect } from "react-redux";

import "./activity-list.css";

class ActivityList extends React.Component {
    
    componentDidMount() {
        const { activityService, activitiesError, activitiesLoaded, activitiesRequested } = this.props;
        
        activitiesRequested();

        activityService.getActivities()
        .then((data) => activitiesLoaded(data))
        .catch((err) => activitiesError(err));
    }

    render() {
        const { visibleItems, loading, error } = this.props;

        if (loading) {
            return <Spinner />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (<div className="list-group activity-list">
                    {
                        visibleItems.map((activity) => {
                            return(
                                <ActivityCard key={ activity.id } 
                                            imgUrl={ activity.coverImage } activity={ activity }/>
                            );
                        })
                    }
                </div>)
    }
};

const mapStateToProps = ({ visibleItems, loading, error }) => {
    return({
        visibleItems, loading, error
    });
};

const mapDispatchToProps = {
    activitiesError,
    activitiesLoaded,
    activitiesRequested
};
  

export default connect(mapStateToProps, mapDispatchToProps)(ActivityList);
