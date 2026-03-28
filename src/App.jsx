import { useState } from 'react';
import TodoInput from './components/TodoInput';
import FilterBar from './components/FilterBar';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    }

    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className='app'>
      <h1>Bienvenue dans la Todo List !</h1>
      <TodoInput onAdd={addTodo} />
      <FilterBar filter={filter} onFilterChange={setFilter} />
      <TodoList todos={todos} filter={filter} onDelete={deleteTodo} onToggle={toggleTodo} />
      {todos.length <= 0 ? (
        <p>Aucune tâche.</p>
      ) : (
        <p>{todos.filter(todo => !todo.completed).length} tâche(s) restante(s).</p>
      )}
    </div>
  );
}

export default App;
