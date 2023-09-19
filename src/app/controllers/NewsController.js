const Course= require('../models/Course');
class NewsController {

    //[GET] /data

    // using promise
    async index(req, res){
    await Course.find({})
      .then(course => {
        course=course.map(course=> course.toObject());
        res.render('home',{course})
       })
      
       
    }

    //[GET]/course/create
  
     create(req,res,next){
      res.render('courses/create');
     }
    //[GET]/course/store
   //Tạo khóa học
    store(req,res,next){
    const jsondata=req.body;
      //res.json(jsondata);
       const course= new Course(jsondata);
      course.save()
      .then(()=> res.redirect('/courses/store'))
     
    }
 //update khóa học
   // GET /courses/:id/edit
   async edit(req,res,next){
      const course = await Course.findById(req.params.id)  //hàm findById() trả về 1 đối tượng duy nhất nên ko dùng map (dành cho mảng)
   
      const courseObject=course.toObject()
       res.render('courses/edit', { course: courseObject });
    }
   //PUT /courses/:id
   update(req,res,next){
      const jsondata=req.body
       Course.updateOne({_id:req.params.id},jsondata)
       .then(()=> res.redirect('/me/stored/courses'))
   }
   //DELETE courses/:id
   delete(req,res,next){
       Course.delete({_id:req.params.id})   //delete là phương thức của mongoose-delete (soft delete)
        .then(()=>res.redirect('back')) 
   }
//DELETE courses/:id/force
   deleteforce(req,res,next){
    Course.deleteOne({_id:req.params.id})   //deleteOne là phương thức của mongoose-delete (soft delete) dùng để xóa thật
     .then(()=>res.redirect('back')) 
}
   //PATCH /course/:id/restore
   restore(req,res,next){
     // res.send('khôi phục')
       Course.restore({_id:req.params.id})   //restore là phương thức của mongoose-delete (soft delete)
      .then(()=>res.redirect('back'))
   }

}

//xuất ra để chút bên routes import gọi sử dụng class này 
module.exports=new NewsController