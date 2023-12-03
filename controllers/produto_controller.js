import Produto from "../models/produto_model.js"; //vamos para o model!
import Pedido from "../models/pedido_model.js";

export const getProdutos = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        res.send(produtos);
    } catch (e) {
        console.log("Erro ao acessar a tabela Produtos!",e)
    }
}

export const getProdutosByCategoria = async (req, res) => {
    const { id_categoria } = req.params;

    try {
        const produtos = await Produto.findAll({
            where: {
                id_categoria: id_categoria
            }
        });

        res.status(200).json(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos por categoria:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos por categoria', message: error.message });
    }
};

export const getProdutosByQuantidadePedido = async (req, res) => {
    const { qtde_pedido } = req.params;

    try {
        const pedidos = await Pedido.findAll({
            where: {
                qtde_pedido: qtde_pedido
            },
            attributes: ['cod_produto'], // Selecionar apenas o campo 'cod_produto'
            raw: true // Obter resultados em objetos JavaScript simples
        });
        
        const codigosProdutos = pedidos.map(pedido => pedido.cod_produto);
        const produtosComQuantidadePedido = await Produto.findAll({
            where: {
                cod_produto: codigosProdutos
            }
        });

        res.status(200).json(produtosComQuantidadePedido);
    } catch (error) {
        console.error('Erro ao buscar produtos por quantidade de pedido:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos por quantidade de pedido', message: error.message });
    }
};

export const createProdutos = async (req, res) => {
    try {
        await Produto.create(req.body);
        res.json({
            "message":"Um novo registro de produtos foi inserido!"
        })

    } catch (e) {
        console.log("Erro ao inserir um novo registro!", e);

    }
}

export const updateProduto = async (req, res) => {
    try {
        await Produto.update(req.body,{
            where: {
                cod_produto: req.params.cod_p
            }
        })
        res.json({
            "message":"O produto " + req.params.cod_p +  " foi atualizado!"
        })
    } catch (e) {
        console.log("Erro ao atualizar registro Produto!");

    }
}

export const deleteProduto = async (req, res) => {
    try {
        await Produto.destroy({
            where: {
                cod_produto: req.params.cod_p
            }
        })
        res.json({
            "message":"O produto " + req.params.cod_p +  " foi excluído!"
        })
    } catch (e) {
        console.log("Erro ao excluir registro Produto!");

    }
}



