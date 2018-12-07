//fix the splice that selects wrong item + fix the show completed todo


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
                <img src="https://image.flaticon.com/icons/svg/149/149347.svg" />
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
            done: [],
            showDone:[]
        }
    }

    newToDo(e) {
        if (e.charCode == 13) {
            this.setState({
                key: this.state.key + 1
            })
            this.state.arr.push( <div className="newTodo" key={this.state.key + 1}> <img onClick={this.remove} src="https://image.flaticon.com/icons/svg/2/2276.svg" />{this.textInput.value}  <img className="trash" src="https://image.flaticon.com/icons/svg/126/126468.svg" /> </div>)
        }
    }

    remove(e) {
        this.setState({
            key: this.state.key + 1
        })
        var task = e.target.textContent;
        var image = document.getElementById("unchecked")

        var task_arr = this.state.arr;
        for(var i= 0; i < task_arr.length; i++){
            if(task === task_arr[i].props.children[2]){
                task_arr.splice(i, 1);
            }
        }
        var done_arr = this.state.done;
        done_arr.push(<div className="newTodo" key={this.state.key + 1}> <img id="unchecked" src="https://image.flaticon.com/icons/svg/25/25643.svg" />{task}  <img className="trash" src="https://image.flaticon.com/icons/svg/126/126468.svg" /> {this.task}</div>)

        this.setState({
            arr : task_arr,
            done : done_arr
        })
    }

    // shows the list in console log, how do i display it on screen

    showCompleted() {
        console.log(this.state.done);
        var numbers = this.state.done.map(x => <li key={`item${x}`}>{x}</li>);
        console.log(numbers)
        numbers = <li>{numbers}</li>;
        debugger;
        return numbers;
    }

    render() {
        return (
            <div className="inputContainer">
                <img src="https://image.flaticon.com/icons/svg/54/54443.svg" />
                <input ref={(text) => { this.textInput = text; }} onKeyPress={this.newToDo} className="addTodo" type="text" placeholder="Add a to-do..." />
                <span>{this.state.arr} </span>

                <div className="showCompleted" onClick={this.showCompleted} >Show completed to-do's </div>
                {/* <div> {this.state.text} </div> */}
                
                <div>
                    {this.state.done}
                </div>
           
            </div>
        )
    }
}

class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="newTodo" key={this.props.key}> <img onClick={this.remove} src="https://image.flaticon.com/icons/svg/2/2276.svg" />{this.textInput.value}  <img className="trash" src="https://image.flaticon.com/icons/svg/126/126468.svg" /> </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);



// class App extends React.Component {
//     render() {
//         return (
//             <div className="appContainer">
//                 <Header />
//                 <List />
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <div className="headerContainer">
//                 <h2 className="header"> My Todo List</h2>
//             </div>
//         )
//     }
// }

// class List extends React.Component {
//     constructor() {
//         super()

//         this.newToDo = this.newToDo.bind(this),
//             this.remove = this.remove.bind(this),
//             this.showCompleted = this.showCompleted.bind(this),

//             this.state = {
//                 arr: [],
//                 key: 0,
//                 removed: []
//             }
//     }
//     //add new todo
//     newToDo(e) {
//         if (e.charCode == 13) {
//             this.setState({
//                 arr: this.state.arr,
//                 key: this.state.key + 1
//             })
//             this.state.arr.push(<li className="newTodo" key={this.state.key + 1}>{this.textInput.value} </li>)
//         }
//     }
//     //remove todo when clicked on
//     remove(e) {
//         console.log("helo")
//         this.setState({
//             arr: this.state.arr,
//         })
//         this.state.removed.push(e.target)
//         this.state.arr.splice(e.target)
//     }
//     // figure out how to show removed items in this funtion
//     showCompleted() {
//         this.setState({
//             removed: this.state.removed,
//             // key: this.state.key + 1
//         })
//         this.state.removed.push(<li className="newTodo" key={this.state.key + 1}>{this.removed}</li>)
//     }

//     render() {
//         return (
//             <div className="inputContainer" >
//                 <img src="https://image.flaticon.com/icons/svg/54/54443.svg" />
//                 <input ref={(text) => { this.textInput = text; }} onKeyPress={this.newToDo} className="addTodo" type="text" placeholder="Add a to-do..." />
//                 <span onClick={this.remove}>{this.state.arr}</span>

//                 <div className="showCompleted"  >Show completed to-do's </div>
//                 <div> {this.state.removed} </div>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );