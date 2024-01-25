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
    res.redirect(`/posts`)
  })
}

function deletePost(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    if (post.owner.equals(req.user.profile._id)) {
      post.deleteOne()
      .then(() => {
        res.redirect('/posts')
      })
    }else {
      throw new Error ('Not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/posts`)
  })
}


function dislikes(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    console.log("post", post)
  })
}

function likes(req, res){

}

function addComment(req, res) {
  Post.findById(req.params.postId)
  .then(post => {
    req.body.author = req.user.profile._id
    post.comments.push(req.body)
    post.save()
    .then(()=> {
      res.redirect(`/posts/${post._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect(`/posts`)
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/posts`)
  })
}


export {
  index,
  newPost as new,
  create,
  show,
  edit,
  update,
  deletePost as delete,
  dislikes,
  likes,
  addComment
}