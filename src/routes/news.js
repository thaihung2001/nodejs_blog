const express= require('express');
const router= express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index

router.get('/create',newsController.create);
router.post('/store',newsController.store);

router.get('/:slug',newsController.index);

// khúc này làm nhiệm vụ chỉnh sửa khóa học
router.get('/:id/edit',newsController.edit); // chọn
router.put('/:id',newsController.update); // chỉnh sửa sau khi đã chọn
router.delete('/:id',newsController.delete); //xóa 
router.delete('/:id/force',newsController.deleteforce); //xóa
router.patch('/:id/restore',newsController.restore); // khôi phục sau khi đã xóa

module.exports = router;



