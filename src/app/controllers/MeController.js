const Course= require('../models/Course');
class MeController {

    //[GET]   me/stored/courses
  
    async storedCourses(req,res,next){
        await Course.find({})
        .then(course => {
        let num=1;
          course=course.map(course=> course.toObject());
          res.render('me/stored-courses',{course,num})
         })
     }
     //GET trash/courses
     async  trashCourses(req,res,next){
      await Course.findDeleted({}) // lấy ra những gì đã xóa bằng mongoose-delete
        .then(course => {
        let num=1;
          course=course.map(course=> course.toObject());
          res.render('me/trash-courses',{course,num})
         })
  }

   
}

//xuất ra để chút bên routes import gọi sử dụng class này 
module.exports=new MeController