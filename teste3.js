const data = require("./fakeData");

module.exports = function (req, res) {
  const idToFind = parseInt(req.params.id);
  const userIndex = data.findIndex((user) => user.id === idToFind);
  if (userIndex === -1) {
    res.status(404).send("User not found!");
    return;
  }

  data.splice(userIndex, 1);

  res.status(204).send();
};
