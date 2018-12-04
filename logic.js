class App extends React.Component {
    render() {
        return (
            <div className="appContainer">
                <Header />
                <List />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="headerContainer">
                <h2 className="header"> My Todo List</h2>
            </div>
        )
    }
}

class List extends React.Component {
    constructor() {
        super()

        this.newToDo = this.newToDo.bind(this),
            this.remove = this.remove.bind(this),
            this.showCompleted = this.showCompleted.bind(this),

            this.state = {
                arr: [],
                key: 0,
                removed: []
            }
    }
    //add new todo
    newToDo(e) {
        if (e.charCode == 13) {
            this.setState({
                arr: this.state.arr,
                key: this.state.key + 1
            })
            this.state.arr.push(<li className="newTodo" key={this.state.key + 1}>{this.textInput.value} </li>)
        }
    }
    //remove todo when clicked on
    remove(e) {
        this.setState({
            arr: this.state.arr,
        })
        this.state.removed.push(e.target)
        this.state.arr.splice(e.target)
    }
    // figure out how to show removed items in this funtion
    showCompleted() {
        this.setState({
            removed: this.state.removed,
            // key: this.state.key + 1
        })
        this.state.removed.push(<li className="newTodo" key={this.state.key + 1}>{this.removed}</li>)
    }

    render() {
        return (
            <div className="inputContainer" >
                <img src="https://image.flaticon.com/icons/svg/54/54443.svg" />
                <input ref={(text) => { this.textInput = text; }} onKeyPress={this.newToDo} className="addTodo" type="text" placeholder="Add a to-do..." />
                <span onClick={this.remove}>{this.state.arr}</span>

                <div className="showCompleted"  onClick={this.showCompleted}>Show completed to-do's </div>
                <div> {this.state.removed} </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);