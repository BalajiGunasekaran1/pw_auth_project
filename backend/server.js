const dotenv = require('dotenv')
dotenv.config()
const app = require('./app.js')

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})