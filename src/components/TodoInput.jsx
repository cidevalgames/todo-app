import { useState } from "react";
import './TodoInput.css';

function TodoInput({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        onAdd(text);
        setText('');
    }

    return (
        <div className="todo-input">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                />
                <button
                    type="submit"
                >Ajouter</button>
            </form>
        </div>
    )
}

export default TodoInput;