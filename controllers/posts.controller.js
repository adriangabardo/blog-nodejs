const Post = require('../models/posts.model.js');

// Create and Save a new Device
exports.create = (req, res) => {
    // Validando se a criação do post possuí titulo
    if(!req.body.titulo) {
        return res.status(400).send({
            message: "Post não pode ser criado sem titulo"
        });
    }
    // Validando se a descrição não está vazia
    if(!req.body.descricao) {
        return res.status(400).send({
            message: "Post não pode ser criado sem descrição"
        });
    }

    // Criando um post
    const post = new Post({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
    });

    // Salvando o post no banco de dados
    post.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocorreu um erro ao salvar o post."
        });
    });
};

// Retornando todos os posts do Banco de Dados
exports.findAll = (req, res) => {
    Post.find()
    .then(post => {
        res.send(post);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ocorreu um erro ao buscar os posts."
        });
    });
};

// Editando um post unico
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Conteudo não pode estar vazio"
        });
    }

    // Encontrando o post e editando
    Post.findByIdAndUpdate(req.params.id, {
        titulo: req.body.titulo || "Post sem nome",
        content: req.body.content
    }, {new: true})
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "Post não encontrado " + req.params.id
            });
        }
        res.send(post);
    }).catch(err => {
        if(err.kind === 'id') {
            return res.status(404).send({
                message: "Post não encontrado " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Erro atualizando post " + req.params.id
        });
    });
};

// Deletando um post especifico
exports.delete = (req, res) => {
    Post.findByIdAndRemove(req.params.id)
    .then(post => {
        if(!post) {
            return res.status(404).send({
                message: "Post não encontrado " + req.params.id
            });
        }
        res.send({message: "Post deletado com sucesso!"});
    }).catch(err => {
        if(err.kind === 'id' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Post não encontrado " + req.params.id
            });
        }
        return res.status(500).send({
            message: "Não foi possivel deletar o post " + req.params.id
        });
    });
};
