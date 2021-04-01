const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config'); 
const authJwt = require('./helper/jwt');
const errorHandler = require('./helper/error-handler')

const Api = require('amazon-pa-api50')
const Config = require('amazon-pa-api50/lib/config')
// Optional for different resources
const resources = require('amazon-pa-api50/lib/options').Resources
// for product condition
const condition = require('amazon-pa-api50/lib/options').Condition
// Optional for different country
const country = require('amazon-pa-api50/lib/options').Country
// for Search Index
const searchIndex = require('amazon-pa-api50/lib/options').SearchIndex

let myConfig = new Config();

app.use(cors());
app.options("*", cors());

// Middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use(errorHandler);

//Routes
const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

 

mongoose.connect(process.env.CONNECTION_STRING,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
.then(()=>{
    console.log('database connection success')
})
.catch((err)=>{
    console.log(err);
});

app.listen(3000,()=>{
 
    console.log("server run on port 3000");
})