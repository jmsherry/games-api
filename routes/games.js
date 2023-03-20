const express = require('express');
const { body } = require('express-validator')

const {getGames, addGame, updateGame, deleteGame} = require('./../controllers/game.controller.js')

const router = express.Router();

/* GET users listing. */
router.get(`/:id?`, getGames);

router.post(`/`,
body('title').not().isEmpty().trim().escape(),
body('games_console').not().isEmpty().trim().escape(),
body('cover_url').trim().isURL(),
addGame
);

router.put(`/:id`, 
body('title').optional().not().isEmpty().trim().escape(),
body('games_console').optional().not().isEmpty().trim().escape(),
body('cover_url').optional().trim().isURL(),
updateGame
);

router.delete(`/:id`, deleteGame);

module.exports = router;
