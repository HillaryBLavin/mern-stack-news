const Article = require('../models/article');

module.exports = {
    find: function (req, res) {
        Article.find().then(function(data) {
            res.json(data);
        }).catch(function(err) {
            res.json(err);
        });
    },
    create: function (req, res) {
        Article.create(req.body).then(function (data) {
            res.json(data);
        }).catch(function(err) {
            res.json(err);
        });
    },
    delete: function (req, res) {
        Article.remove({
            _id: req.params.id
        }).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    }
};