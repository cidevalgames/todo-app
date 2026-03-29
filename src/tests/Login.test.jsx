import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import Login from '../pages/Login'

function renderLogin() {
    render(
        <MemoryRouter>
            <AuthProvider>
                <Login />
            </AuthProvider>
        </MemoryRouter>
    )
}

describe('Login', () => {
    test('affiche le formulaire de connexion', () => {
        renderLogin()
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
        expect(screen.getByPlaceholderText('Mot de passe')).toBeInTheDocument()
        expect(screen.getByText('Se connecter')).toBeInTheDocument()
    })

    test('affiche une erreur avec de mauvais identifiants', () => {
        renderLogin()
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'mauvais@email.com' } })
        fireEvent.change(screen.getByPlaceholderText('Mot de passe'), { target: { value: 'mauvaismdp' } })
        fireEvent.click(screen.getByText('Se connecter'))
        expect(screen.getByText('Email ou mot de passe incorrect.')).toBeInTheDocument()
    })

    test('pas d\'erreur avec les bons identifiants', () => {
        renderLogin()
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'admin@todo.com' } })
        fireEvent.change(screen.getByPlaceholderText('Mot de passe'), { target: { value: 'admin123' } })
        fireEvent.click(screen.getByText('Se connecter'))
        expect(screen.queryByText('Email ou mot de passe incorrect.')).not.toBeInTheDocument()
    })
})