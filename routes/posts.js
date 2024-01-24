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
router.get('/postId/edit', isLoggedIn, postsCtrl)
// POST localhost:3000/posts
router.post('/', isLoggedIn, postsCtrl.create)

export {
  router
}