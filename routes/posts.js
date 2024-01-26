import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
import { isLoggedIn } from '../middleware/middleware.js'
const router = Router()

router.get('/', postsCtrl.index)
router.get('/new', isLoggedIn, postsCtrl.new)
router.get('/:postId', postsCtrl.show)
router.get('/:postId/edit', isLoggedIn, postsCtrl.edit)
router.post('/', isLoggedIn, postsCtrl.create)
router.get('/:postId/comments/:commentId/edit', isLoggedIn, postsCtrl.editComment)
router.put('/:postId', isLoggedIn, postsCtrl.update)
router.delete('/:postId', isLoggedIn, postsCtrl.delete)
router.put('/:postId/comments/:commentId', isLoggedIn, postsCtrl.updateComment)
router.post('/:postId/comments', isLoggedIn, postsCtrl.addComment)
router.delete('/:postId/comments/:commentId', isLoggedIn, postsCtrl.deleteComment)

export {
  router
}