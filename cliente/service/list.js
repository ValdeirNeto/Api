const sequelize = require('./../../database/index')
const Cliente = sequelize.import('./../schema/Cliente')


module.exports = (req, res ) => {
    Cliente
        .findAll()
        .then((clientes) => {
            if(!clientes || !clientes.length){
                return res.status(400)
                          .json({
                              status: false,
                              data: []
                          })
            }
            return res.status(200)
                    .json({
                        status: true,
                        data: clientes
                    })
        })
        .catch(err => res.status(500)
                        .json({
                            status: false,
                            data: []
                        })
             )
}