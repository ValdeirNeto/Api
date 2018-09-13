const sequelize = require('./../../database/index')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('pecas', {
        idPecas:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        preco: DataTypes.STRING,
        descricao: DataTypes.STRING
    }, {
		timestamps: false
	})
}