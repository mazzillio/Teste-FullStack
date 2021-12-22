import {Router} from 'express'
import { CarroController } from './controllers/CarroController'
import { CepsController } from './controllers/CepsController'
import { MotoController } from './controllers/MotoController'
import { NotasController } from './controllers/NotasController'
import { PalindromeController } from './controllers/PalindromoController'
import { VeiculoController } from './controllers/veiculoController'

const routes=Router()

const palindromeController= new PalindromeController()
const notasController = new NotasController()
const veiculoController = new VeiculoController()
const cepsController = new CepsController()


routes.get('/palindromo/:init/:end',palindromeController.handle)
routes.get('/notas/:money/:value',notasController.handle)
routes.post('/veiculos/:veiculo?', veiculoController.handle)
routes.post('/ceps',cepsController.handle)

export {routes}