import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { todo, toggleTodo } = this.props;

    return (
      <div
        style={{ 
          textDecoration: todo.completed ? 'line-through' : '', 
          cursor: 'pointer' 
        }}
        onClick={() => toggleTodo(todo.id)} 
      >
        {todo.name} 
      </div>
    );
  }
}
