import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([
        { name: 'Admin', email: 'admin@todo.com', password: 'admin123' }
    ]);

    const login = (email, password) => {
        const found = users.find(u => u.email === email && u.password === password);

        if (found) {
            setUser(found);
            return true;
        }

        return false;
    }

    const register = (name, email, password) => {
        const found = users.find(u => u.email === email);

        if (found) return false;

        const newUser = { name, email, password };

        setUsers([...users, newUser]);
        setUser(newUser);

        return true;
    }

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}