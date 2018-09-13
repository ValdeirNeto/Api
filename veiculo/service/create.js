
const sequelize = require('./../../database/index')
const Veiculo = sequelize.import('./../schema/Veiculo')

module.exports = (req, res ) => {
    let veiculo = new Veiculo(req.body)
    
    veiculo
        .save()
        .then((created) => {
            if(!created) {
                return res.status(404)
                         .json({ status: false, data: {} })
            }

            return res.status(201)
                     .json({ status: true, data: created} )
        })
        .catch(err => res.status(500)
                        .json({ status: false, data: {} }))
}