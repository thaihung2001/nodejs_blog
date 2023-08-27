class NewsController {

    //[GET] /news
    index(req, res){
        res.render('news');
    }

    //[GET]/:slug
    show(req, res){
      res.send('SHOW DETAILS !!!');
    }
}

//xuất ra để chút bên routes import gọi sử dụng class này 
module.exports=new NewsController