import React, {Component} from "react";
import AppHeader from "../AppHeader";
import SearchPanel from "../SearchPanel";
import TodoList from "../TodoList";
import ItemStatusFilter from "../ItemStatusFilter";
import ItemAddForm from "../ItemAddForm";
import { v4 as uuidv4 } from 'uuid';

export default class App extends Component {

    createTodoItem = (label) => {
        return {
            label, 
            important: false,
            done: false, 
            id: uuidv4()
        };
    };


    state = {
        todoData: [
            this.createTodoItem("Drink coffee"),
            this.createTodoItem("Make awesome App"),
            this.createTodoItem("Go for a walk")
        ],
        term: '',
        filter: 'all'// active, all, done
    };
    
    deleteItem = (id) => {
        this.setState(( {todoData} ) => {
            const indx = todoData.findIndex((el) => el.id === id);

            const before = todoData.slice(0, indx);
            const after = todoData.slice(indx + 1);

            return {
                todoData: [...before, ...after]
            };
        })
    };

    addItem = (text) => {
        this.setState(( {todoData} ) => {
            return {
                todoData: [...todoData, this.createTodoItem(text)]
            };
        });
    };

    onToggleImportant = (id) => {
        this.setState(( {todoData} ) => {

            return {
                todoData: this.onToggleProperty(todoData, id, "important")
            };
        })
    };

    onToggleDone = (id) => {
        this.setState(( {todoData} ) => {
            
            return {
                todoData: this.onToggleProperty(todoData, id, "done")
            };
        })
    };

    onToggleProperty = (arr, id, propName) => {
        const indx = arr.findIndex((el) => el.id === id);
        
        const before = arr.slice(0, indx);
        const after = arr.slice(indx + 1);

        var oldItem = {...arr[indx]};

        return [
                ...before, 
                { ...oldItem, [propName]: !oldItem[propName] },
                ...after];
    };

    onSearchChange = (term) => {
        this.setState({ term });
    };

    onFilterChange = (filter) => {
        this.setState( {filter} );
    };
    
    search = (items, term) => {
        if (items.length === 0) {
            return items;
        }
        else {
            return items.filter((item) => {
                return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
        }
    };

    filter = (items, filter) => {
        if (filter === 'active') {
            return this.getNeedDoneTodos(items);
        }
        else if (filter === 'done') {
            return this.getDoneTodos(items);
        }
        else {
            return items;
        }
    };

    getNeedDoneTodos = (items) => {
        return items.filter((item) => !item.done);
    };

    getDoneTodos = (items) => {
        return items.filter((item) => item.done);
    };

    render() {
        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);

        const todosNeedDone = this.getNeedDoneTodos(todoData);

        const todosDone = this.getDoneTodos(todoData);

        return (
            <div>
                <AppHeader todosNeedDone={todosNeedDone.length} 
                    todosDone={todosDone.length}/>
                <div className="d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos = {visibleItems}
                 onDeleted = {this.deleteItem}
                 onToggleDone = {this.onToggleDone}
                 onToggleImportant = {this.onToggleImportant}/>
                 <ItemAddForm onAdded = {this.addItem}/>
            </div>
        )
    }
};
