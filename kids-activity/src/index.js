import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry";
import ActivityServiceContext from "./components/activity-service-context";
import ActivityService from "./services/activity-service";
import store from "./store";

const activityService = new ActivityService();

ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundry>
            < ActivityServiceContext.Provider value={ activityService }>
                <App />
            </ ActivityServiceContext.Provider>
        </ErrorBoundry>
    </Provider>, 
    document.getElementById("root"));