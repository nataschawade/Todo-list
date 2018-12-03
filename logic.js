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
    constructor(){
        super()
       
    }
    newToDo() {
        
    }
    render() {
        return (
            <div className="inputContainer">
                <img src="https://image.flaticon.com/icons/svg/54/54443.svg" /> 
               <input onKeyPress={this.newToDo} className="addTodo" type="text" placeholder="Add a to-do..."/> 
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);