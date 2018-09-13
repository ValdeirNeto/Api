const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://:@.mysql.dbaas.com.br/azteste', { operatorsAliases: Sequelize.Op })
sequelize
	.authenticate()
	.then(() => console.log('OK!'))
	.catch(() => console.log('ERROR!'))

sequelize.sync()

module.exports = sequelize