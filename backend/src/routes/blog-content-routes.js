const express = require('express');
const router = express();
const controller = require('../controllers/blog-content-controller');

router.get('/blogs' , controller.getBlogs);
router.get('/blogs/:id' , controller.getContent);
router.post('/blogs' , controller.saveBlog);
router.put('/blogs/:id' , controller.updateBlog);
router.delete('/blogs/:id' , controller.deleteBlog);

module.exports = router;