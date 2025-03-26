const express = require('express');
const cors = require('cors');


const review = require('./routers/reviewRouter');
const user = require('./routers/userRouter');
const seller = require('./routers/sellerRouter');
const product = require('./routers/productRouter');
const contact=require('./routers/contactRouter');


const app = express();

const port =process.env.PORT|| 5000;
app.use(cors({
    origin: ['http://localhost:3000'],

}))
app.use(express.json());


app.use('/user', user);
app.use('/seller', seller);
app.use('/product',product);
app.use('/review', review);
app.use('/contact',contact);


app.get('/getall', (req, res) => {
    res.send('Database connected');
});

// Corrected app.listen()
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

