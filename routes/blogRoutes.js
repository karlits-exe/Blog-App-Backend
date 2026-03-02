const router = require('express').Router();
const blogController = require('../controllers/blogController');
const { verify, verifyAdmin } = require('../auth');

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.post('/', verify, blogController.createBlog);
router.put('/:id', verify, blogController.updateBlog);
router.delete('/:id', verify, blogController.deleteBlog);
router.get('/user/:userId', verify, blogController.getBlogsByUser);
router.post('/:id/comments', verify, blogController.addComment);
router.delete("/:id/comments/:commentId", verify, verifyAdmin, blogController.deleteComment);
module.exports = router;