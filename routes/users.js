/* eslint-disable quotes */
const router = require('express').Router();
const path = require('path');

// eslint-disable-next-line quote-props
const errorMessage = { "message": "Нет пользователя с таким id" };
// eslint-disable-next-line import/no-dynamic-require
const users = require(path.join(__dirname, '../data/users.json'));

function checkId(req, res) {
  const { id } = req.params;
  // eslint-disable-next-line no-underscore-dangle
  const user = users.find((item) => item._id === id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send(errorMessage);
  }
}

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', checkId);

module.exports = router;
