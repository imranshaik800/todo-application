import Input from "./components/input";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const InitailData = [{
  id : uuidv4()
}];

class App extends Component {
  state = { name: "", InputElement: "", firstData: InitailData };

  InputElement = (event) => {
    this.setState({ name: event.target.value });
  };

  Addtodoitems = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const newContact = {
      id: uuidv4(),
      name,

    };
    this.setState((previous) => ({
      firstData: [...previous.firstData, newContact],
      InputElement: "",
    }));
  };  

  onDeleteUser = id => {
    const {firstData} = this.state
    const filterData = firstData.filter(
      eachUser => eachUser.id !== id,
    )
    this.setState({firstData: filterData})
  }

  

  render() {
    const { firstData } = this.state;

    return (
      <div className="bg-container">
        <h1>Todo List Application</h1>
        <div className="card-container">
          <form className="form-element" onSubmit={this.Addtodoitems}>
            <input className="input" onChange={this.InputElement} type="text" />
            <button className="add-button">
              Add
            </button>
          </form>
          <ul className="unorder-list">
            {firstData.map((eachItem) => (
              <Input onDeleteUser={this.onDeleteUser} key={eachItem.id} InputElement={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
