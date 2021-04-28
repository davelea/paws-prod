const express = require('express');
const marked = require('marked');
const Article = require('../models/article');
const router = express.Router();

router.get('/', async (req, res) => {
  const articles = await Article.find();
  res.render('blog/index', { title: 'Paws Around Motown: Blog', articles: articles});
});

router.get('/:slug', async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug });

  if (article == null) res.redirect('/');

  res.render('blog/detail', { title: article.title, article });
});

module.exports = router;
