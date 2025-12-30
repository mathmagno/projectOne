import express from 'express'

const app = express()

app.get('/users', (req, res) => {
    res.send('Ok, deu bom')
});

app.listen(3000)





/* 
1 Tipo de rota / Método HTTP
2 Endereço 

*/