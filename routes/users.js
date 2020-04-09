const router = require('express').Router();
const path = require('path');

const users = require(path.join(__dirname, '../data/users.json'));

function checkId(req, res) {
  const { id } = req.params;
  const user = users.find((item) => {
    return item._id === id;
  });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ "message": "Нет пользователя с таким id" });
  }
}

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', checkId);

module.exports = router;
