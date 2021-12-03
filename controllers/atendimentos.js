const Atendimento = require('../models/atendimentos');

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res);
    });

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id);
        Atendimento.buscaPorId(id, res);
        //res.send('OK');
    })

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;

        Atendimento.adiciona(atendimento, res);
        // res.send("Voce está na roda de Atendimento e esta realizando um POST")
    });

    app.patch('/atendimentos/:id', (req, res) => {
        // converte o ID em número
        const id = parseInt(req.params.id);
        const valores = req.body;

        Atendimento.altera(id, valores, res);
    })
}