import React, {Component} from "react";

export default class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    render() {
        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(( {name, label} ) => {
            const isActive = filter === name;

            const className = `btn ${isActive ? "btn-info" : "btn-outline-secondary"}`;

            return <button key={name} type="button" className={className}
                onClick={() => onFilterChange(name)}> 
                {label}
            </button>
        });

        return(
            <div>
                {buttons}
            </div>
        );
    };
};