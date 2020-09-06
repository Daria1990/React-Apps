import React from "react";
import "./AppHeader.css";

const AppHeader = ( {todosNeedDone, todosDone} ) => {

    return (
        <h3 className="app-header">
            {`${todosDone} have already done! ${todosNeedDone} are waiting!`}
        </h3>
    )
}

export default AppHeader;