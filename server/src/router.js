import express from 'express';
import CharacterController from './controllers/characters-controller';

const router = express.Router();

router.get('/characters', CharacterController.getAll);

module.exports = router;
