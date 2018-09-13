const sequelize = require('./../../database/index')
const Veiculo = sequelize.import('./../schema/Veiculo')

module.exports = (req, res ) => {
    Veiculo
        .findAll({})
        .then((veiculos) => {
            if(!veiculos || !veiculos.length){
                return res.status(400)
                          .json({
                              status: false,
                              data: []
                          })
            }

            return res.status(200)
                    .json({
                        status: true,
                        data: veiculos
                    })
        })
        .catch(err => res.status(500)
                        .json({
                            status: false,
                            data: []
                        })
             )
}
