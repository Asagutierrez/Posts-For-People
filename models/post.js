import mongoose from "mongoose";

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  authoer: {type: Schema.Types.ObjectId, ref: 'Profile'}
})


const postSchema = new Schema({
  name: String,
  content: String,
  likes: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  dislikes: [{type: Schema.Types.ObjectId, ref: 'Profile'}],
  owner: {type: Schema.Types.ObjectId, ref: 'Profile'}
},{
  timestamps: true
})


const Post = mongoose.model('Post', postSchema)


export {
  Post
}