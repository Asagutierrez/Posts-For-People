import { Router } from 'express'
import * as postsCtrl from '../controllers/post.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

// GET localhost:3000/posts
router.get('/', postsCtrl.index)
// GET localhost:3000/posts
router.get('/new', isLoggedIn, postsCtrl.new)
// GET localhost:3000/posts
router.get('/:postId', postsCtrl.show)
// GET localhost:3000/posts/:postId/edit
router.get('/:postId/edit', isLoggedIn, postsCtrl.edit)
// POST localhost:3000/posts
router.post('/', isLoggedIn, postsCtrl.create)
// POST localhost:3000/posts/:postId/comments
router.get('/:postId/comments/:commentId/edit', isLoggedIn, postsCtrl.editComment)
// PUT localhost:3000/posts/:postId/
router.put('/:postId', isLoggedIn, postsCtrl.update)
// DELETE localhost:3000/posts/:postId/
router.delete('/:postId', isLoggedIn, postsCtrl.delete)
// PUT localhost:3000/posts/:postId/
router.put('/:postId/dislike',isLoggedIn, postsCtrl.dislikes)
// PUT localhost:3000/posts/:postId/
router.put('/:postId/like', isLoggedIn, postsCtrl.likes)
// PUT localhost:3000/posts/:postId/
router.put('/:postId/comments/:commentId', isLoggedIn, postsCtrl.updateComment)
// POST localhost:3000/posts/:postId/comments
router.post('/:postId/comments', isLoggedIn, postsCtrl.addComment)


export {
  router
}