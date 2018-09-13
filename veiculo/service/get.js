const sequelize = require('./../../database/index')
const Veiculo = sequelize.import('./../schema/Veiculo')

module.exports =  (req, res) => {
	Veiculo
		.findById(req.params.id)
		.then((veiculo) => {
            if(!veiculo){
                return res.status(400)
                          .json({
                              status: false,
                              data: []
                          })
            }
            return res.status(200)
                    .json({
                        status: true,
                        data: veiculo
                    })
        })
        .catch(err => res.status(500)
                        .json({
                            status: false,
                            data: []
                        })
             )
}