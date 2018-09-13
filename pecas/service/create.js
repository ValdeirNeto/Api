const sequelize = require('./../../database/index')
const Peca = sequelize.import('./../schema/Pecas')

module.exports = (req, res ) => {
    let peca = new Peca(req.body)
    
    peca
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