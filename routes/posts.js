import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
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
// PUT localhost:3000/posts/:postId/
router.put('/:postId', isLoggedIn, postsCtrl.update)
// DELETE localhost:3000/posts/:postId/
router.delete('/:postId', isLoggedIn, postsCtrl.delete)
// PUT localhost:3000/posts/:postId/
router.put('/dislike/:postId',isLoggedIn, postsCtrl.dislikes)
// PUT localhost:3000/posts/:postId/
router.put('/like/:postId', isLoggedIn, postsCtrl.likes)
// POST localhost:3000/
export {
  router
}