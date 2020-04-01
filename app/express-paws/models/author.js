let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let AuthorSchema = new Schema(
  {
    first_name: { type: String, required: true, max: 100 },
    last_name: { type: String, required: true, max: 100 },
  }
);

// virtual for author's full name
AuthorSchema
  .virtual('name')
  .get(function () {

    let fullname = '';

    if (this.first_name && this.family_name) {
      fullname = this.family_name + ' ' + this.first_name;
    }

    return fullname;
  });

module.exports = mongoose.model('Author', AuthorSchema);
