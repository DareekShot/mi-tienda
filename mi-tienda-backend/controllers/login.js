import usersService from "../services/login.js ";

const login = async (req, res) => {
    const payload = req.body;
    const result = await usersService.login(payload);
    
    return sendResults(result, res);
}

const sendResults = (result, res) => {
    if (result) {
        return res.status(200).json(result);
    } else {
        return res.status(500).json({ message: "ERROR " });
    }
}

const loginController = { login } 

export default loginController;

