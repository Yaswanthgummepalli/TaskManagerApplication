import { useState } from "react";
import api from "../services/api";

function Register({ goToLogin }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await api.post("/auth/register", {
                name,
                email,
                password
            });

            setMessage("Registration successful. Please login.");

            alert("registration successful");

            setName("");
            setEmail("");
            setPassword("");

            setTimeout(() => {
                goToLogin();
            }, 1000);

        } catch (error) {
            setMessage(
                error.response?.data?.message ||
                "Registration failed"
            );

            alert("registration failed");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h1>Task Manager</h1>

                <h2>Create Account</h2>

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

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
                        Register
                    </button>
                </form>

                {message && (
                    <p>{message}</p>
                )}

                <p>
                    Already have an account?
                    <button
                        className="link-button"
                        onClick={goToLogin}
                    >
                        Login
                    </button>
                </p>
            </div>
        </div>
    );
}

export default Register;