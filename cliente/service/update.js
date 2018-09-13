const sequelize = require('./../../database/index')
const Cliente = sequelize.import('./../schema/Cliente')

module.exports = (req, res) => {
	Cliente
        .update(req.body, { where: { idClientes: req.params.id}})
            .then((update) => {
                if(!update) {
                    return res.status(404)
                            .json({ status: false, data: {} })
                }

                return res.status(200)
                        .json({ status: true, idClientes: req.params.id} )
            })
            .catch(err => res.status(500)
                        .json({ status: false, data: {} }))
}