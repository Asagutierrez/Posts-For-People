import mongoose from "mongoose";

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: 'Profile'}
},{
  timestamps: true
})


const postSchema = new Schema({
  name: String,
  content: String,
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'},
  comments: [commentSchema]
},{
  timestamps: true
})


const Post = mongoose.model('Post', postSchema)


export {
  Post
}