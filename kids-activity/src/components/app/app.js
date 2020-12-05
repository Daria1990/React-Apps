import React from "react";
import { ActivityPage, ContactPage, HomePage } from "../pages";
import Header from "../header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
    return(
        <main role="main" className="container">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact component={ HomePage }/>
                    <Route path="/activities" component={ ActivityPage }/>
                    <Route path="/contacts" component={ ContactPage }/>
                    <Route render={() => <h2>Page not found</h2>} />
                </Switch>
            </Router>
        </main>
    );
};

export default App;