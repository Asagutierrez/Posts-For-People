import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()

// GET localhost:3000/posts
router.get('/', postsCtrl.index)
// GET localhost:3000/posts
router.get('/new', postsCtrl.new)
// POST localhost:3000/posts
router.get('/new', postsCtrl.create)

export {
  router
}