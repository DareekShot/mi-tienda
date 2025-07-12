import RepositoryBase from "../repositories/base.js";
import model from "../models/user.js";

const repository = new RepositoryBase(model);

const login = async (payload) => {
    const usuarios = await repository.findAll();

    const result = await usuarios.find(x => x.username === payload.username && 
                                    x.password === payload.password);
    if (result) 
        return result;
    else 
        return null;
    }

const usersService = { login }

export default usersService;
