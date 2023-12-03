import produto from "../models/produto_model.js" //vamos para o model!

export const getProdutos = async (req, res) => {
    try {
        const produtos = await produto.findAll();
        res.send(produtos);
    } catch (e) {
        console.log("Erro ao acessar a tabela Produtos!",e)
    }
} 

export const createProdutos = async (req, res) => {
    try {
        await produto.create(req.body);
        res.json({
            "message":"Um novo registro de produtos foi inserido!"
        })

    } catch (e) {
        console.log("Erro ao inserir um novo registro!", e);

    }
}

export const updateProduto = async (req, res) => {
    try {
        await produto.update(req.body,{
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
        await produto.destroy({
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



