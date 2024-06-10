import React from "react";
import "./styles.css";

export default function App() {
  const [todos, setToDos] = React.useState([
  ])

  return (
    <div>
      <h1>Todo List</h1>

      <TodoList todos={todos} /> 
      <AddTodo todos={todos} setToDos={setToDos} />
    </div>
  );
}

function TodoList({todos}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key = {todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function AddTodo({ setToDos }) {
  const inputRef = React.useRef();

  async function handleAddTodo(event) {
    event.preventDefault();
//  const text = event.target.value.AddTodo;
//  const text = event.target.elements.addTodo.value;
    console.log(1);
    const text = await fetch('http://localhost:3000/addition', {
      method: 'POST',
      body: JSON.stringify({
        first: '1', 
        second: '3',
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(function(response) {
      return response.text();
    });
    console.log(text);
    const todo = {
      id: 4,
      text,
      done: false
    };
    setToDos(prevTodos => {
      inputRef.current.value = "";
      return prevTodos.concat(todo)
    })
    const tmp = todo;
    console.log(todo)
    tmp.push(todo);
    setToDos(tmp);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input name="addTodo" placeholder="Add todo" ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}