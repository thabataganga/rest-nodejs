module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        res.send("Você está na rota de atendimentos e esta realizando um GET")
    });

    app.post('/atendimentos', (req, res) => {
        console.log(req.body);
        res.send("Voce está na roda de Atendimento e esta realizando um POST")
    });
}