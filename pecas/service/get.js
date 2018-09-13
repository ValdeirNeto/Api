const sequelize = require('./../../database/index')
const Peca = sequelize.import('./../schema/Pecas')

module.exports =  (req, res) => {
	Peca
		.findById(req.params.id)
		.then((pecas) => {
            if(!pecas){
                return res.status(400)
                          .json({
                              status: false,
                              data: []
                          })
            }
            return res.status(200)
                    .json({
                        status: true,
                        data: pecas
                    })
        })
        .catch(err => res.status(500)
                        .json({
                            status: false,
                            data: []
                        })
             )
}