const sequelize = require('./../../database/index')
const Peca = sequelize.import('./../schema/Pecas')

module.exports = (req, res) => {
	Peca
        .update(req.body, { where: { idPecas: req.params.id}})
            .then((update) => {
                if(!update) {
                    return res.status(404)
                            .json({ status: false, data: {} })
                }

                return res.status(200)
                        .json({ status: true, idPecas: req.params.id} )
            })
            .catch(err => res.status(500)
                        .json({ status: false, data: {} }))
}