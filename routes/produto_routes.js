import express from 'express' //beleza 
import { getProdutos, createProdutos, updateProduto, deleteProduto, getProdutosByCategoria, getProdutosByQuantidadePedido } from '../controllers/produto_controller.js' //vamos para o controller!

const router = express.Router()

router.get('/produto', getProdutos)
router.post('/produto', createProdutos)
router.put('/produto/:cod_p', updateProduto)
router.delete('/produto/:cod_p', deleteProduto)
router.get('/produto/por-categoria/:id_categoria', getProdutosByCategoria);
router.get('/produto/por-quantidade-pedido/:qtde_pedido', getProdutosByQuantidadePedido);

export default router;