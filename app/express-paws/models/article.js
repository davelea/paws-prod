let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    url: { type: String, required: true },
  }
);

module.exports = mongoose.model('Article', ArticleSchema);
