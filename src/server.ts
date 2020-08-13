import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors()); // possibilita que o fronte end que está rodando em outra porta 
                // consiga consumir o serviço da API que por padrão bloqueia o acesso 
app.use(express.json()); // indica que os dados da api serão tratados no formato json
app.use(routes);
app.listen(3333); // fica escutando as requisições

// app.get('/users', (request, response) => {
//   console.log(request.query);
//   const users = [
//     {"name": 'André Leal', "age": 49},
//     {"name": 'Marineude', "age": 49}
//   ]
//   return response.json(users);
// });

// app.delete('/users/:id', (request, response) => {
//   console.log(request.params);
//   const users = [
//     {"name": 'André Leal', "age": 49},
//     {"name": 'Marineude', "age": 49}
//   ]
//   return response.json(users);
// });


// app.post('/users', (request, response) => {
//   console.log(request.body);
//   const users = [
//     {"name": 'André Leal', "age": 49},
//     {"name": 'Marineude', "age": 49}
//   ]
//   return response.json(users);
// });

