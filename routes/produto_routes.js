import express from 'express' //beleza 
import { getProdutos, createProdutos, updateProduto, deleteProduto } from '../controllers/professor_controller.js' //vamos para o controller!

const router = express.Router()

router.get('/produto', getProdutos)
router.post('/produto', createProdutos)
router.put('/produto/:cod_r', updateProduto)
router.delete('/produto/:cod_r', deleteProduto)

export default router