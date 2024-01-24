import { Post } from '../models/post.js'


function create(req, res) {
  console.log('create')
  req.body.owner = req.user.profile._id
  Post.create(req.body)
  .then(post => {
    res.redirect('/posts')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function index(req, res) {
  Post.find({})
  .then(posts => {
    res.render('posts/index', {
      posts,
      title: posts
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

function newPost(req, res) {
  res.render('posts/new', {
    title: 'Add Post'
  })
}


function show(req,res) {
  Post.findById(req.params.tacoId)
  .populate("owner")
  .then(post => {
    res.render('posts/show', {
      post,
      title: 'Posts'
    })
    .catch(err => {
      console.log(err)
      res.redirect("/")
    })
  })
}

export {
  index,
  newPost as new,
  create,
  show
}