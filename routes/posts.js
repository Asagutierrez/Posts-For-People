import { Router } from 'express'
import * as postsCtrl from '../controllers/posts.js'
const router = Router()

// GET localhost:3000/posts
router.get('/', postsCtrl.index)

export {
  router
}