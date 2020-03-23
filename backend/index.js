const express= require('express');

const app= express();

app.get('/', (request, response) => {

    return response.send({
            evento: "Semana Omnistack 11",
            aluno: "Marcelo Ratton"
        });
});

app.listen(3333);