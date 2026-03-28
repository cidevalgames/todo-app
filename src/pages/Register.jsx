import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import '../styles/Form.css';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            setError('Tous les champs sont obligatoires.');
            return;
        }

        if (password.length < 6) {
            setError('Le mot de passe doit contenir au moins 6 caractères.');
            return;
        }

        const success = register(name, email, password);

        if (success) {
            navigate('/');
        } else {
            setError('Cet email est déjà utilisé.');
        }
    }

    return (
        <div className="register">
            <h1>Inscription</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nom"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {error && <p className="error">{error}</p>}
                <button type="submit">S'inscrire</button>
            </form>
            <p>Déjà un compte ? <Link to="/login">Se connecter</Link></p>
        </div>
    )
}

export default Register;