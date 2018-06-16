import mongoose from "mongoose";

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new NoteSchema object
// This is similar to a Sequelize model
const CommentSchema = new Schema({
  // `body` is of type String
    PetId: {
        type: Schema.Types.ObjectId,
        ref: "Pet"
    },
    Comments: String,

   

 },
  {timestamps: true});

// This creates our model from the above schema, using mongoose's model method
const Comment = mongoose.model("Comment", CommentSchema);

// Export the Pet model
export default Comment;