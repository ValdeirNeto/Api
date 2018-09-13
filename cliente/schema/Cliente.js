const sequelize = require('./../../database/index')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('clientes', {
        idClientes:{
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nomeCliente: DataTypes.STRING,
        sexo: DataTypes.STRING,
        documento: DataTypes.STRING,
        telefone: DataTypes.STRING,
        celular: DataTypes.STRING,
        email: DataTypes.STRING,
        dataCadastro: DataTypes.STRING,
        rua: DataTypes.STRING,
        numero: DataTypes.STRING,
        bairro: DataTypes.STRING,
        cidade: DataTypes.STRING,
        estado: DataTypes.STRING,
        cep: DataTypes.STRING
    }, {
		timestamps: false
	})
}