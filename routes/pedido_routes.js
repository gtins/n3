import express from 'express' //beleza 
import { getPedido, createPedido, updatePedido, deletePedido } from '../controllers/pedido_controller.js' //vamos para o controller!

const router = express.Router()

router.get('/pedido', getPedido);
router.post('/pedido', createPedido);
router.put('/pedido/:n_ped', updatePedido);
router.delete('/pedido/:n_ped', deletePedido);

export default router;