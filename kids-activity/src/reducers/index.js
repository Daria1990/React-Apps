//import getActivities from "./activity-list";

const setVisibleItems = (items, term, filter) => {
    if (items.length === 0) {
        return [];
    }

    const searchItems = searchActivities(items, term);

    return filterActivities(searchItems, filter);
};

const searchActivities = (items, term) => {
    return items.filter((item) => {
        return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
};

const compareTimeFromString = (time1, time2) => {
    if (time1 && time2) {
        const timeArr1 =  time1.split(':');
        const timeArr2 =  time2.split(':');

        const totalMinutes1 = Number(timeArr1[0]) * 60 + Number(timeArr1[1]);
        const totalMinutes2 = Number(timeArr2[0]) * 60 + Number(timeArr2[1]);

        return totalMinutes1 >= totalMinutes2;
    }
    else {
        return false
    }
};

const filterActivities = (items, filter) => {
    if (filter == null) {
        return items;
    }

    if (filter.age) {
        items = items.filter((item) => item.minAge >= filter.age);
    }

    if (filter.price) {
        items = items.filter((item) => item.price <= filter.price);
    }

    if (filter.startTime) {
        items = items.filter((item) => 
                        compareTimeFromString(item.startTime, filter.startTime[0])
                        && compareTimeFromString(filter.startTime[1], item.startTime)
        );
    }

    if (filter.weekDays && filter.weekDays.length !== 0) {
        items = items.filter((item) => {
                                if (item.weekDays)
                                {
                                    return item.weekDays.some((w) => 
                                        filter.weekDays.indexOf(w) >= 0)
                                }
                            }
                        );
    }
    
    return items;
};


const initialState = {
        activities: [],
        visibleItems: [],
        loading: true,
        error: null,
        term: '',
        filter: null
    };

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case "FETCH_ACTIVITIES_REQUEST": 
            return {
                ...state,
                loading: true,
                error: null
            };
        case "FETCH_ACTIVITIES_SUCCESS": 
            return {
                ...state,
                activities: action.payload,
                visibleItems: action.payload,
                loading: false,
                error: null,
            };
        case "FETCH_ACTIVITIES_FAILURE": 
        console.log(action.payload);
            return {
                ...state,
                activities: [],
                visibleItems: [],
                loading: false,
                error: action.payload,
            };
        case "SEARCH_ACTIVITIES":
            return {
                ...state,
                visibleItems: setVisibleItems(state.activities, action.payload, state.filter),
                term: action.payload
            }
        case "FILTER_ACTIVITIES":
            return {
                ...state,
                visibleItems: setVisibleItems(state.activities, state.term, action.payload),
                filter: action.payload
            }
        default: {
            return state;
        }
    }
};

export default reducer;