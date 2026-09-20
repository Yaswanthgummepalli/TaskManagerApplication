import { useState } from "react";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
    const [page, setPage] = useState(
        localStorage.getItem("token") ? "dashboard" : "login"
    );

    const handleLogin = () => {
        setPage("dashboard");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setPage("login");
    };

    if (page === "dashboard") {
        return (
            <Dashboard
                onLogout={handleLogout}
            />
        );
    }

    if (page === "register") {
        return (
            <Register
                goToLogin={() => setPage("login")}
            />
        );
    }

    return (
        <Login
            onLogin={handleLogin}
            goToRegister={() => setPage("register")}
        />
    );
}

export default App;