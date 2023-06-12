const data = require("./fakeData");

module.exports = PostUser = (req, res) => {
  let { name, job, isAdmin } = req.body;

  const lastUser = data[data.length - 1];
  const newId = lastUser.id + 1;

  const UserAlreadyExists = data.find(
    (user) => user.name === name && user.job === job
  );

  if (!job || !name) {
    res.status(400).send("data invalid");
    return;
  }
  if (UserAlreadyExists) {
    res.status(409).send("User already exists");
    return;
  }

  if (!isAdmin) {
    isAdmin = false;
  }

  const newUser = {
    id: newId,
    name,
    job,
    isAdmin,
    count: 0,
  };

  data.push(newUser);

  res.status(201).json(newUser);
};
