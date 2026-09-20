const authService = require("../services/authService");

const register = async (req, res) => {
    try {
        const user = await authService.registerUser(req.body);

        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await authService.loginUser(
            email,
            password
        );

        res.status(200).json({
            message: "Login successful",
            ...result
        });
    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

module.exports = {
    register,
    login
};