import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

import Todo from './Todo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }

    this.todoInput = ""
  }

  addTodo() {
    let todoValue = this.todoInput.value

    let newTodos = this.state.todos
    newTodos.push(todoValue)//dodaję całe słowo do końca listy

    this.setState({
      todos: newTodos
    })

    //Reset
    this.todoInput.value = ""

    //Set focus to to input
    this.todoInput.focus()
  }

  removeTodo(id) {
    let todos = this.state.todos.filter((todo, index) => {
      return id !== index
    })

    this.setState ({
      todos: todos
    })
  }

  render() {
    return (
        <div>
          <h1>React To Do</h1>
          <p>To Do's count: {this.state.todos.length}</p>
          <ul>
            {this.state.todos.map((todo, index) => {
              return (<Todo id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)}/>)
            }) }
          </ul>
          <input type="text" placeholder="Enter todo" ref={(input) => this.todoInput = input}/>
          <button onClick={this.addTodo.bind(this)}>Add</button>
        </div>
    );
  }
}

export default App;
