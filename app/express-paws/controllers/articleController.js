const Author = require('../models/author');

exports.article_list = function(req, res) {
  res.send(Author.countDocuments());
};

exports.article_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Article detail: ' + req.params.id);
};