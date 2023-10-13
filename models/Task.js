const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  // the properties mentioned on schema will only be shown and considered , rest will be ignored
  name: {
    // validation
    type: String,
    required: [true, "Must provide name"], // required true means , we need that value wrna system wont accept it
    trim: true,
    maxlength: [20, "name can not be more thsn 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false, // initially not completed makes more sense
  },
}); // BASICALLY SETS THE STRUCTURE FOR THE DATA

module.exports = mongoose.model("Task", TaskSchema);

// ANY OTHER PROPERTY NAMED CLASS OR ANYTHING WILL BE IGNORED BCZ ONLY NAME AND COMPLETED IS PRESENT IN SCHEMA
