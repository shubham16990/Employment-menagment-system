// Context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //   setLocalStorage()
    //   getLocalStorage()

    // }, )

    return (
        <div>{children}</div>
    );
};

export default AuthProvider;
