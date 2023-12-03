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
        const { cod_produto, qtde_pedido } = req.body;

        let novaQtdePedido = 0;

        if (qtde_pedido <= 3) {
            novaQtdePedido = 4;
        } else if (qtde_pedido > 3 && qtde_pedido < 7) {
            novaQtdePedido = 3;
        } else {
            return res.status(400).json({ message: 'Quantidade do produto não atende aos critérios para criação do pedido.' });
        }

        const novoPedido = await pedido.create({
            cod_produto,
            qtde_pedido: novaQtdePedido
        });

        res.status(201).json({
            message: 'Um novo registro de pedido foi inserido!',
            pedido: novoPedido
        });
    } catch (e) {
        console.log('Erro ao inserir um novo registro de pedido', e);
        res.status(500).json({ error: 'Erro ao inserir um novo registro de pedido' });
    }
};


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