import React from 'react'
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  
  addTodo = (todoName) => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };


  toggleTodo = (id) => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: newTodos });
  };

  
  removeCompletedTodos = () => {
    this.setState({ todos: this.state.todos.filter(todo => !todo.completed) });
  };

  render() {
    return (
      <div>
        
        <TodoList 
          todos={this.state.todos} 
          toggleTodo={this.toggleTodo} 
        />
        <Form addTodo={this.addTodo} />
        <button onClick={this.removeCompletedTodos}>Remove Completed</button>
      </div>
    );
  }
}
