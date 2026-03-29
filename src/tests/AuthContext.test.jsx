import { render, screen, fireEvent } from '@testing-library/react';
import { AuthProvider, useAuth } from '../context/AuthContext';

function TestComponent() {
    const { user, login, logout } = useAuth();

    return (
        <div>
            <p>{user ? user.email : 'non connecté'}</p>
            <button onClick={() => login('admin@todo.com', 'admin123')}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

describe('AuthContext', () => {
    test('utilisateur non connecté par défaut', () => {
        render(<AuthProvider><TestComponent /></AuthProvider>)
        expect(screen.getByText('non connecté')).toBeInTheDocument()
    })

    test('login avec bons identifiants', () => {
        render(<AuthProvider><TestComponent /></AuthProvider>)
        fireEvent.click(screen.getByText('Login'))
        expect(screen.getByText('admin@todo.com')).toBeInTheDocument()
    })

    test('logout remet user à null', () => {
        render(<AuthProvider><TestComponent /></AuthProvider>)
        fireEvent.click(screen.getByText('Login'))
        fireEvent.click(screen.getByText('Logout'))
        expect(screen.getByText('non connecté')).toBeInTheDocument()
    })
})