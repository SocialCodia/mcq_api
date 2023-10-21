const mongoose = require('mongoose');

const dbConnection = () => {

    const dbUrl = process.env.DB_URL || 'mongodb+srv://socialcodia:uZqEPCgjU4RsHkYR@cluster0.gkvfj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    // const dbUrl = 'mongodb://localhost:27017/mcq'
    mongoose.connect(dbUrl).then(() => console.log('Database Connected'))
        .catch(err => console.log(`Failed To Connect Database, Reason : ${err}`))

}

module.exports = dbConnection();