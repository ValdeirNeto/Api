import express from 'express'
import create from './service/create'
import list from './service/list'
import remove from './service/remove'
import update from './service/update'
import get from './service/get'

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', create)
router.delete('/:id', remove)
router.put('/:id', update)

export default router