const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/*
 * Tipos de parametros
 * Query params: Parametros nomeados enviados na rota após o ? (filtros, paginação)
 * Route params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/

module.exports = app;
