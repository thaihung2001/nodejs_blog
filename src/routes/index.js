const newsRouter = require('./news');
const meRouter= require('./me');
function route(app){
//Khai bao de tuyen chung cho chuc nang chinh sua
    app.use('/me',meRouter);

    app.use('/courses',newsRouter);
  /*   app.get('/', (req, res) => {
        res.render('home'); 
      }); */
      
      /* app.get('/new', (req, res) => {
        res.render('new'); 
      }); */
      
     
      
       app.get('/search',(req,res)=>{
        // console.log(req.query);
         res.render('search');
       });

     
      
     
     
     app.post('/search',(req,res)=>{
        //console.log(req.body);
        var i =req.body.q;
       res.send(i); 
        
      }); 
}
module.exports = route;