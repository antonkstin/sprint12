const router = require('express').Router();

const users = require('../data/users.json');

function checkId(req, res) {
  const { id } = req.params;
  for (let item of users) {
    if (item._id === id) {
      res.send(item);
      return;
    }
  }
  res.status(404).send({ "message": "Нет пользователя с таким id" });
}

router.get('/', (req, res) => {
  res.send(users);
});

router.get('/:id', checkId);

module.exports = router;
