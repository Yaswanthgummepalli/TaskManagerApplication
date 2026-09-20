import { useState } from "react";
import api from "../services/api";

function Login({ onLogin, goToRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", response.data.token);

            localStorage.setItem(
                "user",
                JSON.stringify({
                    userId: response.data.userId,
                    name: response.data.name,
                    email: response.data.email
                })
            );

            alert("login successful");

            onLogin();
        } catch (error) {
            setMessage(
                error.response?.data?.message ||
                "Login failed"
            );

            alert("invalid email or password");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Task Manager</h1>

                <h2>Login</h2>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>
                </form>

                {message && (
                    <p className="error">{message}</p>
                )}

                <p>
                    Don't have an account?
                    <button
                        className="link-button"
                        onClick={goToRegister}
                    >
                        Register
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Login;