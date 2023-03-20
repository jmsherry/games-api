const mongoose = require('mongoose')

const { Schema } = mongoose;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  games_console: {
    type: String,
    required: true,
    maxLength: 50,
  },
  cover_url: {
    type: String,
    required: true,
    maxLength: 500,
  },
});

const Game = mongoose.model("Game", gameSchema);

exports.schema = gameSchema
exports.model = Game;