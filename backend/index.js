const express = require('express');
const user = require('./routers/userRouter')
const seller = require('./routers/sellerRouter')

const app = express();
const port = 3000;
app.use('/user', user);  
app.use('/seller', seller);  
app.get('/getall', (req,res)=>{
    res.send('data base connected')
})
app.listen( () =>{
    console.log(`server started ${port} `);
});
