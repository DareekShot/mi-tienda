import User from '../models/users.js';
import RepositoryBase from './base.js';

const userRepository = new RepositoryBase(User);
export default userRepository;
