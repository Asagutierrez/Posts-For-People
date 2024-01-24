import mongoose from "mongoose";

const Schema = mongoose.Schema


const postSchema = new Schema({
  name: String,
  content: String,
  like: {type: Schema.Types.ObjectId, ref: 'Profile'},
  dislike: {type: Schema.Types.ObjectId, ref: 'Profile'},
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
},{
  timestamps: true
})


const Post = mongoose.model('Post', postSchema)


export {
  Post
}