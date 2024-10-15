import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '' 
    };
  }

  
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  
  handleSubmit = (e) => {
    e.preventDefault(); 
    if (!this.state.inputValue) return; 
    this.props.addTodo(this.state.inputValue); 
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          value={this.state.inputValue} 
          onChange={this.handleChange} 
          placeholder="Add a new task" 
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
