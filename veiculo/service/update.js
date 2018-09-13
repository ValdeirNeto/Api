const sequelize = require('./../../database/index')
const Veiculo = sequelize.import('./../schema/Veiculo')

module.exports = (req, res) => {
	Veiculo
        .update(req.body, { where: { idVeiculo: req.params.id}})
            .then((update) => {
                if(!update) {
                    return res.status(404)
                            .json({ status: false, data: {} })
                }

                return res.status(200)
                        .json({ status: true, idVeiculo: req.params.id} )
            })
            .catch(err => res.status(500)
                        .json({ status: false, data: {} }))
}