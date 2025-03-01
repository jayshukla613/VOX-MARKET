const mongoose = require('mongoose');
const url = "mongodb+srv://sharmaaman99319:Amans123@cluster0.gjdpn.mongodb.net/VOX_MARKET?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url)
.then((result) => {
    console.log('Database connected successfully')
}).catch((err) => {
    console.log(err)
});
module.exports = mongoose;
