import veiculo from './veiculo/index'
import peca from './pecas/index'
import cliente from './cliente/index'

export default (app) => {
	app.use('/veiculo', veiculo)
	app.use('/pecas', peca)
	app.use('/clientes', cliente)
}