import { Router } from 'express';
import * as usersController from '../controller/users';

const router = Router();

router.post('/', usersController.createUser);
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getOneUser);
router.patch('/:id', usersController.updateUser);

export default router;
