import './TodoItem.css';

function TodoItem({ todo, onDelete, onToggle }) {
    return (
        <div className={`todo-item ${todo.completed && 'completed'}`}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <div
                className={`custom-checkbox ${todo.completed ? 'checked' : ''}`}
                onClick={() => onToggle(todo.id)}
            />
            <p>{todo.text}</p>
            <button onClick={() => onDelete(todo.id)}>Supprimer</button>
        </div>
    )
}

export default TodoItem;