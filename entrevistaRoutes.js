module.exports = function(app) {
    const entrevistaController = require('../controllers/entrevistaController')

    app.route('/entrevista')
        .get(entrevistaController.lista_de_todas_as_entrevistas)
        .post(entrevistaController.enviar_convite)

    app.route('/entrevista/:entrevistaId')
        .get(vagasController.lista_de_uma_entrevista)
        .put(vagasController.atualiza_uma_entrevista)
        .delete(vagasController.remove_uma_entrevista)
}