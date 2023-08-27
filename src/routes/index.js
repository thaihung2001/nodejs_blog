const newsRouter = require('./news');

function route(app){
    app.get('/', (req, res) => {
        res.render('home'); 
      });
      
      /* app.get('/new', (req, res) => {
        res.render('new'); 
      }); */
      
     app.use('/news',newsRouter);

      app.get('/search',(req,res)=>{
       // console.log(req.query);
        res.render('search');
      });
      
      app.post('/search',(req,res)=>{
       // console.log(req.body);
       res.send('');
        
      });
}
module.exports = route;