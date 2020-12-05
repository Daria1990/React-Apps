const activitiesRequested = () => {
    return {
        type: "FETCH_ACTIVITIES_REQUEST"
    }
};

const activitiesLoaded = (activities) => {
    return {
        type: "FETCH_ACTIVITIES_SUCCESS",
        payload: activities
    };
};

const activitiesError = (error) => {
    return {
        type: "FETCH_ACTIVITIES_FAILURE",
        payload: error
    };
};

const searchActivities = (term) => {
    return {
        type: "SEARCH_ACTIVITIES",
        payload: term
    }
};

const filterActivities = (filter) => {
    return {
        type: "FILTER_ACTIVITIES",
        payload: filter
    }
};

export { activitiesRequested, activitiesLoaded, activitiesError, 
            searchActivities, filterActivities };