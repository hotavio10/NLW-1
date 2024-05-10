import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');



    response.json([
        'Douglas',
        'Cleiton',
        'Robson',
        'daniel',
        'teste',
        'pedro'
     ]);
});



app.listen(3333)