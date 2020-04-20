const express = require('express');
const router = express.Router();

const article_controller = require('../controllers/articleController');

/* GET article detail. */
router.get('/:id', article_controller.article_detail);

/* GET article listing. */
router.get('/', article_controller.article_list);

module.exports = router;
