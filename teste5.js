const data = require("./fakeData");

module.exports = getUserCount = (req, res) => {
  const idToFind = parseInt(req.params.id);
  const userFound = data.find((user) => user.id === idToFind);

  if (!userFound) {
    res.status(404).send("User not found!");
    return;
  }

  const message = `Usuário  ${userFound.name} foi lido ${userFound.count} vezes no teste1.`;
  return res.status(200).send({ message: message });
};
