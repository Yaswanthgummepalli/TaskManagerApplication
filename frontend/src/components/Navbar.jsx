function Navbar({ user, onLogout }) {
    return (
        <nav className="navbar">
            <h2>Task Manager</h2>

            <div>
                <span>Hi, {user?.name}</span>

                <button onClick={onLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;