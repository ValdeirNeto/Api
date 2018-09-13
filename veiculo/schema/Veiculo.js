const sequelize = require('./../../database/index')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('veiculo', {
        idVeiculo:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        marca: DataTypes.STRING,
        modelo: DataTypes.STRING,
        placa: DataTypes.STRING
    }, {
		timestamps: false
	})
}