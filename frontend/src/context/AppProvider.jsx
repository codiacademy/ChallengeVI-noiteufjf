import { createContext, useState, useEffect } from 'react';
import { api } from '../lib/api';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        if (token && user) {
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            setData({ token, user: JSON.parse(user) });
        }

        setIsLoading(false)
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setData({})
    }

    return (
        <UserContext.Provider value={{ user: data.user, setData, handleLogout, isLoading }}>
            {children}
        </UserContext.Provider>
    );
};
