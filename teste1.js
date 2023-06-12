const data = require("./fakeData");

const getUser = (req, res) => {
  const idToFind = parseInt(req.params.id);
  const userFound = data.find((user) => user.id === idToFind);

  if (!userFound) {
    res.status(404).send("User not found!");
    return;
  }
  userFound.count += 1;
  return res.status(200).send(userFound);
};

const getUsers = (req, res) => {
  res.status(200).send(data);
};

module.exports = {
  getUser,
  getUsers,
};
