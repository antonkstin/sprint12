/* eslint-disable quote-props */
// Объявил экспресс и модуль пути
const express = require('express');
const path = require('path');

// eslint-disable-next-line quotes
const errorMessage = { "message": "Запрашиваемый ресурс не найден" };

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
app.use('/:nonexistent', (req, res) => {
  res.status(404).send(errorMessage);
});


app.listen(PORT);
