const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    titulo: String,
    descricao: String,
});

module.exports = mongoose.model('Post', PostSchema);
