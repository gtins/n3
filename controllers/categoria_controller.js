import categoria from "../models/categoria_model";

export const getCategoria = async (req, res) => {
    try {
        const categorias = await categoria.findAll();
        res.send(categorias)
    } catch (e) {
        console.log("Erro ao acessar a tabela de categorias",e)
    }
}

export const createCategoria = async (req, res) => {
    try {
        await categoria.create(req.body);
        res.json({
            "message":"Um novo registro de produtos foi inserido!"
        })
    } catch (e) {
        console.log("Erro ao inserir um novo registro",e);
    }
}

export const updateCategoria = async (req, res) => {
    try {
        await categoria.update(req.body,{
            where: {
                id_categoria: req.params.cod_c
            }
        })
        res.json({
            "message":"A categoria " + req.params.cod_c + "foi atualizada!"
        })
    } catch (e) {
        console.log("Erro ao atualizar o registro Categoria!");
    }
}

export const deleteCategoria = async (req, res) => {
    try {
        await categoria.destroy({
            where: {
                id_categoria: req.params.cod_c
            }
        })
        res.json({
            "message":"A categoria " + req.params.cod_c + "foi excluída!"
        })
    } catch (e) {
        console.log("Erro ao excluir registro Categoria!");
    }
}