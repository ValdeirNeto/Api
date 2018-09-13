const sequelize = require('./../../database/index')
const Peca = sequelize.import('./../schema/Pecas')

module.exports =  (req, res) => {
	Peca
		.destroy({ where: { idPecas: req.params.id }})
		.then(() => res.status(204).end())
		.catch(err => res.status(500)
						 .json({ status: false, data: {} })
			)
}