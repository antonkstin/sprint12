const router = require('express').Router();
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const cards = require(path.join(__dirname, '../data/cards.json'));

router.get('/', (req, res) => {
  res.send(cards);
});

module.exports = router;
