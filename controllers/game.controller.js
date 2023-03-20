const {model:Game} = require('./../models/computer-game');

const getGames = async (req, res) => {
  let query = {};
  const { id } = req.params;
  if (id) {
    query._id = id;
  }
  try {
    const games = await Game.find(query)
    return res.status(200).send(games);
  } catch (err) {
    return res.status(500).send(err);
  }
}
exports.getGames = getGames;

const addGame = async (req, res) => {
  const gameData = req.body;

  try {
    const game = new Game(gameData);
    const newGame = await game.save()
    return res.status(201).send(newGame)
  } catch (err) {
    return res.status(500).send(err);
  }
}
exports.addGame = addGame;

const updateGame = async (req, res) => {
  const updateData = req.body;
  console.log(`Updating ${req.params.id}`, updateData);

  if (updateData.avatar_url && updateData.avatar_url.startsWith('data:image')) {
    return res.status(400).send("NO_DATA_URIS_FOR_AVATAR");
  } 

  const isEmpty = req.body // 👈 null and undefined check
  && Object.keys(req.body).length === 0
  && Object.getPrototypeOf(req.body) === Object.prototype

  if (isEmpty) {
    return res.status(400).send("No update data provided");
  }

  try {
    const result = await Game.updateOne({ _id: req.params.id }, updateData);
    console.log("result", result);
    if (result.n === 0) return res.sendStatus(404);
    res.sendStatus(200);
  } catch(err) {
    return res.status(500).send(err);
  }
}
exports.updateGame = updateGame;

const deleteGame = async (req, res) => {
  console.log("gameToBeDeleted", req.params.id);

  try {
    const result = await Game.deleteOne({ _id: req.params.id });
    if (result.deletedCount === 0) return res.sendStatus(404);
    console.log(result);
    res.sendStatus(204);
  } catch (err) {
    return res.status(500).send(err);
  }
}
exports.deleteGame = deleteGame;

