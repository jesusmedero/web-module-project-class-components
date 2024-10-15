import React from 'react'
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleTodo } = this.props;

    return (
      <div>
        {todos.map((todo, index) => (
          <Todo 
            key={index} 
            index={index} 
            todo={todo} 
            toggleTodo={toggleTodo} 
          />
        ))}
      </div>
    );
  }
}
