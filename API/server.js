import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

// VARIÁVEL DO TIPO ARRAY PARA GUARDAR USUÁRIOS
const users = []

// ENVIAR USUÁRIO PARA O CONJUNTO DE DADOS users = []
app.post('/users', async (req, res) => {
    
    await prisma.user.create({
        data: {
            email: req.body.email,
            name:  req.body.name,
            age:   req.body.age
        }
    })

    res.status(201).json(req.body)
})


// CONSULTAR USUÁRIOS EXISTENTES EM users = []
app.get('/users', (req, res) => {
    
    res.status(200).json(users)
})

app.listen(3000)



/* 
1 Tipo de rota / Método HTTP
2 Endereço 

*/