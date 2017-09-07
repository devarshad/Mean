// grab the mongoose module
var mongoose=require('mongoose');

// define model ================================================================
var studentSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String,
  updated_at: { type: Date, default: Date.now },
  active:Boolean,
},
{collection:'student'});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('student', studentSchema);