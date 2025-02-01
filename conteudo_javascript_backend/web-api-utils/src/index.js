import express from 'express'
import morgan from 'morgan'
import { toLowerCase, toUpperCase, minNumber, maxNumber } from './utils/index.js'

const app = express()
const PORT = 3000
const hostname = '127.0.0.1'

app.use(morgan('dev'))
app.use(express.json());

// rota de utilitário de texto
app.post('/util/text/:action', (req, res) => {
    const action = req.params.action
    const input = req.body.input

    if (!input) {
        res.status(400).send('Entrada inválida')
        return
    }
    
    switch (action) {
        case 'uppercase':
            res.send(toUpperCase(input))
            break
        case 'lowercase':
            res.send(toLowerCase(input))
            break
        default:
            res.status(404).send('Ação não suportada')
    }
})

// rota de utilitário de número

app.get('/util/number/:action', (req, res) => {
    const action = req.params.action;
    const input = req.query.input;

    if (!input) {
        return res.status(400).json({ error: 'Entrada inválida' });
    }

    const numbers = input.split(',').map(Number)
    
    let output;

    switch (action) {
        case 'minimum':
            output = minNumber(numbers).toString()
            break
        case 'maximum':
            output = maxNumber(numbers).toString()
            break
        default:
            return res.status(404).json({ error: 'Ação não suportada'} )
    }

    res.json({
        action: action,
        input: numbers,
        output: output
    })
})


app.listen(PORT, hostname, () => {
    console.log(`App is listening at http://${hostname}:${PORT}/`)
})