const express = require('express');
const app = express(); 

//principal:
app.use(express.static('public'));
app.use(express.static('images'));

    
app.listen(process.env.PORT || 3001, () => {
      console.log("server started on port: ", process.env.PORT || 3001);
    });