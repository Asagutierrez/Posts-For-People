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
  Post.findById(req.params.postId)
  .populate("owner")
  .then(post => {
    res.render('posts/show', {
      post,
      title: 'posts'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/posts")
})
}

function edit(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    res.render('posts/edit', {
      post,
      title: 'edit post'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/posts')
  })
}

function update(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    if (post.owner.equals(req.user.profile._id)) {
      post.updateOne(req.body)
      .then(()=> {
        res.redirect(`/posts/${post._id}`)
      })
    } else {
      throw new Error('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/tacos`)
  })
}

export {
  index,
  newPost as new,
  create,
  show,
  edit,
  update
}