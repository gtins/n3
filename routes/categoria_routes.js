import express from 'express' //beleza 
import { getCategoria, createCategoria, updateCategoria, deleteCategoria } from '../controllers/categoria_controller.js' //vamos para o controller!

const router = express.Router()

router.get('/categoria', getCategoria);
router.post('/categoria', createCategoria);
router.put('/categoria/:cod_c', updateCategoria);
router.delete('/categoria/:cod_c', deleteCategoria);

export default router;