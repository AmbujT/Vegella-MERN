const mongoose = require('mongoose');
const mongoURL = 'mongodb+srv://moneyibm7:money4ibm@cluster0.cgihkiq.mongodb.net/Vegella?retryWrites=true&w=majority'; // Your connection string

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to MongoDB');
  
      // const fetched_data = await mongoose.connection.db.collection('users').find({}).toArray();
    //   console.log('Fetched data:', fetched_data);
      const fetched_product = await mongoose.connection.db.collection('products').find({}).toArray();
            // console.log('Fetched data:', fetched_product);
            global.products = fetched_product;

    } catch (err) {
      console.error('---', err);
    } 
  };

module.exports = mongoDB;
