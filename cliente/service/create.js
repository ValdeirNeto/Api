const sequelize = require('./../../database/index')
const Cliente = sequelize.import('./../schema/Cliente')

module.exports = (req, res ) => {
    let cliente = new Cliente(req.body)
    
    cliente
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