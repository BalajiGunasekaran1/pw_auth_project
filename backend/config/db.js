const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI

const connectToDb = async ()=>{
    await mongoose.connect(MONGO_URI).then((conn)=>{
        console.log(`Db connected successfully ${conn.connection.host}`);
    }).catch((e) => {
        console.log(e);
        process.exit(1)
    });
}

module.exports = connectToDb