import mongoose from "mongoose";

const Schema = mongoose.Schema


const postSchema = new Schema({
  name: String,
  content: String,
  like: [{type: Schema.Types.ObjectId, ref: 'profile'}],
  dislike: [{type: Schema.Types.ObjectId, ref: 'profile'}],
  owner: {type: Schema.Types.ObjectId, ref: 'profile'}
},{
  timestamps: true
})


const Post = mongoose.model('Post', postSchema)


export {
  Post
}