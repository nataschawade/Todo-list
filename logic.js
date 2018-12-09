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

