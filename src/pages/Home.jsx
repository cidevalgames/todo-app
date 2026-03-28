import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import TodoInput from '../components/TodoInput';
import FilterBar from '../components/FilterBar';
import TodoList from '../components/TodoList';
import './Home.css';

function Home() {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('all');
    const { user, logout } = useAuth();

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
        <div className='home'>
            <div className='home-header'>
                <h1>Bienvenue dans la Todo List !</h1>
                <div>
                    <span>{user.email}</span>
                    <button onClick={logout}>Se déconnecter</button>
                </div>
            </div>
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

export default Home;