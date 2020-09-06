import React, {Component} from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {

    render() {
        const { label, onDeleted, done, important, onToggleDone, onToggleImportant } = this.props;
        
        let labelClassNames = "todo-list-item";

        if (done) {
            labelClassNames += " todo-list-item-done";
        }

        if (important) {
            labelClassNames += " todo-list-item-important";
        }

        return (
            <span className={labelClassNames}>
                <span className="todo-list-item-label" onClick={onToggleDone}>{label}</span>
                <button  type="button" onClick={onToggleImportant} className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation"/>
                </button>
                <button  type="button" className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>
            </span>
        )
    }
};