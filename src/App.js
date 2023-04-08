import React from "react";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }

  render() {
    return (
      <div className="App-header">
        <h3>ToDo List</h3>
        <TodoList onClickRemove={this.handleRemoveClick} items={this.state.items} />
        <form className="App-header" onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What should I do
          </label>

          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            ADD #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleRemoveClick = (index) => {

    this.state.items.splice(index, 1);
    this.setState({ items: [...this.state.items] })
    console.log("remove Item")

  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }


}

function TodoList(props) {

  return (
    <ol>
      {props.items.map((item, index) => (
        <div key={item.id} className="listItem">
          <li>{item.text}</li>
          <button onClick={() => props.onClickRemove(index)}>X</button>
        </div>
      ))}
    </ol>
  );
}


export default App;
