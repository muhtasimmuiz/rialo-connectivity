import { useState } from "react";
import { USER_CONTEXT } from "./context";



export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    return (
        <USER_CONTEXT.Provider value={{ user, setUser }}>
            {children}
        </USER_CONTEXT.Provider>
    );
}
