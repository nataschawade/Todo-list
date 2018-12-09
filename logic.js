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
            this.passToDone = this.passToDone.bind(this),
            this.passToDo = this.passToDo.bind(this),
            this.trash = this.trash.bind(this),
            this.state = {
                arr: [],
                key: 0,
                done: [],
            }
    }

    newToDo(e) {
        if (e.charCode == 13) {
            this.setState({
                key: this.state.key + 1
            })

            this.state.arr.push(<div className="newTodo" key={this.state.key + 1}>
                <img onClick={this.passToDone} src="https://image.flaticon.com/icons/svg/2/2276.svg" />
                {`${this.textInput.value} on ${this.daySelect.value}/${this.monthSelect.value}/${this.yearSelect.value}`}
                <img className="trash" src="https://image.flaticon.com/icons/svg/126/126468.svg" /> </div>)
        }
    }
    passToDo(e) {
        this.setState({
            key: this.state.key + 1
        })
        var task = e.target.parentElement.textContent;
        e.target.parentElement.remove();
        console.log(task);
        var task_done = this.state.done;
        for (var i = 0; i < task_done.length; i++) {
            if (task === task_done[i].props.children[2]) {
                task_done.splice(i, 1);
            }
        }
        var arr = this.state.arr;
        arr.push(<div className="newTodo" key={this.state.key + 1}> <img onClick={this.passToDone} id="unchecked" src="https://image.flaticon.com/icons/svg/2/2276.svg" />{task}  <img className="trash" onClick={this.trash} src="https://image.flaticon.com/icons/svg/126/126468.svg" /> {this.task}</div>)
    }
    passToDone(e) {
        this.setState({
            key: this.state.key + 1
        })
        var task = e.target.parentElement.textContent;
        e.target.parentElement.remove();
        var task_arr = this.state.arr;
        for (var i = 0; i < task_arr.length; i++) {
            if (task === task_arr[i].props.children[2]) {
                task_arr.splice(i, 1);
            }
        }
        var done_arr = this.state.done;
        done_arr.push(<div className="newTodo" key={this.state.key + 1}> <img onClick={this.passToDo} id="unchecked" src="https://image.flaticon.com/icons/svg/25/25643.svg" />{task}  <img className="trash" onClick={this.trash} src="https://image.flaticon.com/icons/svg/126/126468.svg" /> {this.task}</div>)

        this.setState({
            arr: task_arr,
            done: done_arr
        })
    }

    trash(e) {
        e.target.parentElement.remove();
    }

    render() {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = [];
        var years = [];
        for (var i = 1; i <= 31; i++) {
            days.push(i)
        }
        for (var i = 2018; i <= 2050; i++) {
            years.push(i)
        }
        var daysDropdown = days.map(
            x => <option key={`item${x}`}>{x}</option>);
        var monthsDropdown = months.map(
            x => <option key={`item${x}`}>{x}</option>);
        var yearsDropdown = years.map(
            x => <option key={`item${x}`}>{x}</option>);
        return (
            <div className="inputContainer">
                <div className="flex">
                    <div>
                        <input ref={(text) => { this.textInput = text; }} onKeyPress={this.newToDo} className="addTodo" type="text" placeholder="Add a to-do..." />
                    </div>
                    <div>
                        <select className="date" ref={(select) => { this.daySelect = select; }}>
                            {daysDropdown}
                        </select>
                        <select className="date" ref={(select) => { this.monthSelect = select; }}>
                            {monthsDropdown}
                        </select>
                        <select className="date" ref={(select) => { this.yearSelect = select; }}>
                            {yearsDropdown}
                        </select>

                    </div>
                </div>
                <span>{this.state.arr} </span>


                <div className="showCompleted" >Completed to-do's </div>
                <div> {this.state.text} </div>

                <div>
                    {this.state.done}
                </div>

            </div>
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
//                 <img src="https://image.flaticon.com/icons/svg/149/149347.svg" />
//             </div>
//         )
//     }
// }

// class List extends React.Component {
//     constructor() {
//         super()
//         this.newToDo = this.newToDo.bind(this),
//             this.moveToDone = this.moveToDone.bind(this),
//             this.undo = this.undo.bind(this),
//             this.counter = 0;
//         this.state = {
//             arr: [],
//             key: 0,
//             done: [],
//             showDone: []
//         }
//     }

//     newToDo(e) {
//         if (e.charCode == 13) {
//             this.setState({
//                 key: this.state.key + 1
//             })
//             var arr = this.state.arr;
//             arr.push(this.textInput.value);
//             this.setState({
//                 arr: arr
//             });
//         }
//     }
//     undo() {
//         var index;
//         var task = this.props.value
//         console.log(this.state.done)
//         for (var i = 0; i < this.state.done.length; i++) {
//             if (this.state.done[i] === task) {
//                 index = i;
//             }
//         }

//         var undone_array = this.state.done;
//         var done_array = this.state.arr;

//         task = undone_array.splice(index, 1);
//         done_array.push(task);

//         this.setState({
//             arr: undone_array,
//             done: done_array
//         });
//     }

//     moveToDone() {
//         var index;
//         var task = this.props.value


//         for (var i = 0; i < this.state.arr.length; i++) {
//             if (this.state.arr[i] === task) {
//                 index = i;
//             }
//         }

//         var undone_array = this.state.arr;
//         var done_array = this.state.done;

//         task = undone_array.splice(index, 1);
//         done_array.push(task);

//         this.setState({
//             arr: undone_array,
//             done: done_array
//         });
//     }

//     render() {
//         var undone_items = this.state.arr.map((x, i) => <Item key={i} undo={this.undo} hey={this.moveToDone} value={x} src={"https://image.flaticon.com/icons/svg/2/2276.svg"} />)
//         var done_items = this.state.done.map((x, i) => <Item key={i} value={x} src={"https://image.flaticon.com/icons/svg/54/54443.svg"} />)
//         return (
//             <div className="inputContainer">
//                 <input ref={(text) => { this.textInput = text; }} onKeyPress={this.newToDo} className="addTodo" type="text" placeholder="Add a to-do..." />
//                 <span>{undone_items} </span>

//                 <div className="showCompleted" >Completed to-do's </div>

//                 <div onClick={this.activate_function} >
//                     {done_items}
//                 </div>

//             </div>
//         )
//     }
// }

// class Item extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             check: this.props.check
//         }
//         this.activate_function = this.activate_function.bind(this);
//     }
//     activate_function(e) {
//         var toggle = this.state.check;
//         if (toggle) {
//             this.props.undo(this);
//         }
//         else {
//             toggle = true;
//         }
//         this.setState({
//             check: toggle
//         })
//         this.props.hey(this);
//     }
//     render() {
//         return (
//             <div>
//                 <div className="newTodo"> <img onClick={this.activate_function} src={this.props.src} />{this.props.value}  <img className="trash" src="https://image.flaticon.com/icons/svg/126/126468.svg" /> </div>

//             </div>

//         )
//     }
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById("root")
// );













































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