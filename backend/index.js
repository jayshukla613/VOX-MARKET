const express = require('express');
const cors = require('cors');

const user = require('./routers/userRouter');
const seller = require('./routers/sellerRouter');
const product = require('./routers/productRouter');

const app = express();

const port =process.env.PORT|| 5000;
app.use(cors({
    origin: ['http://localhost:3000'],

}))
app.use(express.json());

app.use('/user', user);
app.use('/seller', seller);
app.use('/product',product);

app.get('/getall', (req, res) => {
    res.send('Database connected');
});

// Corrected app.listen()
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

