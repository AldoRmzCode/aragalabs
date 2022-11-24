const express = require('express'); 
const app = express(); 

//principal:
app.use(express.static('public'));


/*
app.get('/', (req, res) => {
   res.send('bruh'); 
});
   
  app.get('/about', (req, res )=> {
     res.send('About me');
    });
    
app.get('/contact', (req, res )=> {
      res.send('Form contact');
    });
    
*/
    
  


    
app.listen(3001, () => {
      console.log('Server on port 3001');
    });