const express = require('express'); 
const cors = require('cors');



const imagerouter = require('./routers/Imagerouter');
const contactrouter = require('./routers/contactrouter');
const userrouter = require('./routers/Userrouter');



const app = express();
const port =process.env.PORT|| 5000;
app.use(cors({
    origin: ['http://localhost:3000']

}))



app.use(express.json());


app.use('/user', userrouter)
app.use('/images', imagerouter)
app.use('/contact', contactrouter)




app.get('/', (req, res) => {
    res.send('Hello World!')
}
)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
)

