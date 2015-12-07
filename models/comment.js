var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Comment({
  created_at: { type: Date, default: Date.now() },
  body: { type: String, required: true, trim: true }
});

CommentSchema.pre('save', function(next){
  // set a created_at and update updated_at
  now = new Date();
  this.updated_at = now;
  if ( !this.created_at ) {
    this.created_at = now;
  }
  next();
});

var Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;