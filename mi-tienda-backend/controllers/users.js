import model from '../models/user.js';
import RepositoryBase from '../repositories/base.js';

const userRepository = new RepositoryBase(model);

const findAll = async (req, res) => {
  const users = await userRepository.findAll();
  res.json(users);
}   

const findOne = async (req, res) => {
  const user = await userRepository.findOne(req.params.id);
  res.json(user);
}

const create = async (req, res) => {
  const nuevo = await userRepository.create(req.body);
  res.json(nuevo);
}

const update = async (req, res) => {
  await userRepository.update(req.body);
  res.json({ message: "Usuario actualizado" });
}

const remove = async (req, res) => {
  await userRepository.remove(req.params.id);
  res.json({ message: "Usuario eliminado" });
}

export default {
  findAll,
  findOne,
  create,
  update,
  remove
};
//TODETO