import express from 'express' //beleza 
import { getProdutos, createProdutos, updateProduto, deleteProduto } from '../controllers/produto_controller.js' //vamos para o controller!

const router = express.Router()

router.get('/produto', getProdutos)
router.post('/produto', createProdutos)
router.put('/produto/:cod_p', updateProduto)
router.delete('/produto/:cod_p', deleteProduto)

export default router;