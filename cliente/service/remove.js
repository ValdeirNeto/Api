const sequelize = require('./../../database/index')
const Cliente = sequelize.import('./../schema/Cliente')

module.exports =  (req, res) => {
	Cliente
		.destroy({ where: { idClientes: req.params.id }})
		.then(() => res.status(204).end())
		.catch(err => res.status(500)
						 .json({ status: false, data: {} })
			)
}