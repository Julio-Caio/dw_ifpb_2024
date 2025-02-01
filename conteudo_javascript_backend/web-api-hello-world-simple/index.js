import express from 'express'
import morgan from 'morgan'
import i18n from 'i18n'
import path from 'path'

const app = express()
const PORT = 3000
const hostname = '127.0.0.1'

const __dirname = path.resolve()

// Configuração do i18n
i18n.configure({
    locales: ['en', 'pt', 'es'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    objectNotation: true
});

app.use(morgan('dev'))

// Rota raiz
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Rotas para outros idiomas
app.get('/lang/:locale', (req, res) => {
    const locale = req.params.locale
    if (['en', 'pt', 'es'].includes(locale)) {
        i18n.setLocale(locale);
        res.send(i18n.__('hello'));
    } else {
        res.status(404).send('Idioma não suportado');
    }
});

app.listen(PORT, hostname, () => {
    console.log(`App is running at http://${hostname}:${PORT}/`)
})