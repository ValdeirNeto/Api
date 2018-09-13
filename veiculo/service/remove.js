const sequelize = require('./../../database/index')
const Veiculo = sequelize.import('./../schema/Veiculo')

module.exports =  (req, res) => {
	Veiculo
		.destroy({ where: { idVeiculo: req.params.id }})
		.then(() => res.status(204).end())
		.catch(err => res.status(500)
						 .json({ status: false, data: {} })
			)
}

