import pedido from "../models/pedido_model.js";

export const getPedido = async (req, res) => {
    try {
        const pedidos = await pedido.findAll();
        res.send(pedidos);
    } catch (e) {
        console.log("Erro ao acessar a tabela de pedidos",e);
    }
}

export const createPedido = async (req, res) => {
    try {
        await pedido.create(req.body);
        res.json({
            "message":"Um novo registro de pedidos foi inserido!"
        })
    } catch (e) {
        console.log("Erro ao inserir um novo registro",e);
    }
}

export const updatePedido = async (req, res) => {
    try {
        await pedido.update(req.body,{
            where: {
                num_pedido: req.params.n_ped
            }
        })
        res.json({
            "message":"O pedido " + req.params.n_ped + "foi atualizado!"
        })
    } catch (e) {
        console.log("Erro ao atualizar o registro Pedido!");
    }
}

export const deletePedido = async (req, res) => {
    try {
        await pedido.destroy({
            where: {
                num_pedido: req.params.n_ped
            }
        })
        res.json({
            "message":"O pedido " + req.params.n_ped + "foi excluído!"
        })
    } catch (e) {
        console.log("Erro ao excluir registro Pedido!");
    }
}