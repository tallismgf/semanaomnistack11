const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
 * Tipos de parametros
 * Query params: Parametros nomeados enviados na rota após o ? (filtros, paginação)
 * Route params: Parametros utilizados para identificar recursos
 * Request body: Corpo da requisicao, utilizado para criar ou alterar recursos
*/



app.listen(3333);