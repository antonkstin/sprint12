// Объявил экспресс и модуль пути
const express = require('express');
const path = require('path');

// Объявил роуты
const userRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

// Запустил приложение
const app = express();
// Взял порт из переменной окружения
const { PORT = 3000 } = process.env;

// Сделал папку public доступной для пользователя
app.use(express.static(path.join(__dirname, 'public')));

// Использую роуты
app.use('/users', userRouter);
app.use('/cards', cardsRouter);
app.get('/:nonexistent', (req, res) => {
  res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});


app.listen(PORT);
