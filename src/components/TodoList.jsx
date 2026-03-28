import TodoItem from "./TodoItem";
import './TodoList.css';

function TodoList({ todos, filter, onDelete, onToggle }) {
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    })

    return (
        <div className="todo-list">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default TodoList;