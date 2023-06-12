const data = require("./fakeData");

module.exports = function (req, res) {
  const { name, job } = req.body;
  if (!name || !job) {
    res.status(400).send("data invalid");
  }

  const idToFind = parseInt(req.params.id);

  const userIndex = data.findIndex((user) => user.id == idToFind);

  if (userIndex === -1) {
    res.status(404).send("User not found!");
    return;
  }

  data[userIndex].name = name;
  data[userIndex].job = job;

  res.send(data[userIndex]);
};
