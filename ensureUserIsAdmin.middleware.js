const data = require("./fakeData");

module.exports = ensureUserUserIsAdmin = (req, res, next) => {
  const userId = parseInt(req.params.id);

  const user = data.find((user) => user.id === userId);
  if (!user) {
    res.status(404).send("User not found!");
    return;
  }

  if (user && user.isAdmin === true) {
    next();
  } else {
    res
      .status(401)
      .send("Unauthorized: You do not have permission to access this resource");
  }
};
