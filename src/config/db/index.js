const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/Ken_Do_dev';
// const connectionString = 'mongodb+srv://kendo069960:hanhyeu123@cluster0.azudg.mongodb.net/Ken_Do_cloud_dev?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!');
    }
}

module.exports = { connect };
