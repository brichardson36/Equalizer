const {Product} = require('../models/product');
const express = require('express');
// const { Category } = require('../models/category');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');

router.get(`/`, async (req, res) =>{

    // let filter = {}
    // if(req.query.categories){
    //     filter = {category: req.filter.categories.split(',')}
    // }

    const productList = await Product.find();//.select('name image -_id');
    //const productList = await Product.find(filter).populate('category');
    if(!productList) {
        res.status(500).json({success: false})
    } 
    res.send(productList);
})

router.get(`/:id`, async (req, res) =>{
    if(! mongoose.isValidObjectId(req.params.id)){
        res.status(400).send("Invalid Product Id");
    }
    const product = await Product.findById(req.params.id);// .populate('category');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
})

router.get(`/get/subscribed_user`, async (req, res) =>{
    const productList = await Product.find().select("subscribed_user");//.select('name image -_id');
    //const productList = await Product.find(filter).populate('category');
    if(!productList) {
        res.status(500).json({success: false})
    } 
    res.send(productList);
})

router.get(`/subscribed_user/:id`, async (req, res) =>{
    if(! mongoose.isValidObjectId(req.params.id)){
        res.status(400).send("Invalid Product Id");
    }
    const product = await Product.findById(req.params.id).select("subscribed_user");// .populate('category');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
})

router.post(`/`, async (req, res) =>{
    //const category = await Category.findById(req.body.category);
    //if (!category) return res.status(401).send("Invalid Category")
    

    let product = new Product({
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        price: req.body.price,
        category: req.body.category,
        fid: req.body.fid,
 
    })

    product = await product.save();

    if(!product) {
        return res.status(500).json({message: "The category with the given ID was not found"});
    }

    res.send(product);

})

router.put("/:id", async (req,res)=>{
    if(! mongoose.isValidObjectId(req.params.id)){
        res.status(400).send("Invalid Product Id");
    }
    //const category = await Category.findById(req.body.category);
    //if (!category) return res.status(401).send("Invalid Category")

    const product =await Product.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            price: req.body.price,
            category: req.body.category,
            fid: req.body.fid,
            //subscribed_user: req.body.subscribed_user,
            //in_stock: req.body.in_stock
        },
        {new: true}
    )

    if(!product){
        return res.status(404).send('the product cannot be updated!');
    }

    res.send(product);

})

router.put("/changeprice/:id", async (req,res)=>{
    if(! mongoose.isValidObjectId(req.params.id)){
        res.status(400).send("Invalid Product Id");
    }
    //const category = await Category.findById(req.body.category);
    //if (!category) return res.status(401).send("Invalid Category")
    const oldproduct = await Product.findById(req.params.id);
    const product =await Product.findByIdAndUpdate(
        req.params.id,
        {
            price: req.body.price,
        },
        {new: true}
    ) 

    if(!product){
        return res.status(404).send('the product cannot be restocked!');
    }


    if(product['subscribed_user'].length==0){
        res.send({product,message:'unable to send notification to user due to no subscriber'});
    }
    else{

        if(oldproduct['price']>product['price']){
            let i =0;
            for (i = 0; i < product['subscribed_user'].length; i++) {
                 let diff = oldproduct['price']-product['price'];
                 axios.post('https://exp.host/--/api/v2/push/send', {
                    to: "ExponentPushToken["+product['subscribed_user'][i]+"]",
                    title: product['title'] + "'s price becomes lower by "+diff.toString()+" dollars",
                    body: product['title'] + " is on discount."
                  })
                  .then((response) => {
                     
                    console.log(response);
                    res.send({product,message:"lower by "+diff.toString()});
                  }, (error) => {
                    console.log(error);
                  });
            }
    
        }
        else{
            let i =0;
            for (i = 0; i < product['subscribed_user'].length; i++) {
                let diff =+product['price']-oldproduct['price'];
                 axios.post('https://exp.host/--/api/v2/push/send', {
                    to: "ExponentPushToken["+product['subscribed_user'][i]+"]",
                    title: product['title'] + "'s price becomes higher by "+diff.toString()+" dollars",
                    body: product['title'] + " becomes more expensive...."
                  })
                  .then((response) => {
                     
                    console.log(response);
                    res.send({product,message:"higher by "+diff.toString()});
                  }, (error) => {
                    console.log(error);
                  });
            }
    
        }
        


    
    }

})

router.put("/restock/:id", async (req,res)=>{
    if(! mongoose.isValidObjectId(req.params.id)){
        res.status(400).send("Invalid Product Id");
    }
    //const category = await Category.findById(req.body.category);
    //if (!category) return res.status(401).send("Invalid Category")
    
    const product =await Product.findByIdAndUpdate(
        req.params.id,
        {
            in_stock: true
        },
        {new: true}
    ) 
    console.log(product);
    if(!product){
        return res.status(404).send('the product cannot be restocked!');
    }
    if(product['subscribed_user'].length==0){
        res.send({product,message:'unable to send notification to user due to no subscriber'});
    }
    else{
        let i =0;
        for (i = 0; i < product['subscribed_user'].length; i++) {
            
             axios.post('https://exp.host/--/api/v2/push/send', {
                to: "ExponentPushToken["+product['subscribed_user'][i]+"]",
                title: product['title'] + " is in stock now!!",
                body: product['title'] + " is on sale."
              })
              .then((response) => {
                 
                console.log(response);
                res.send({product,message:'launch notification'});
              }, (error) => {
                console.log(error);
              });
        }
    
    }

})

router.put("/remove/subscribed_user/:id", async (req,res)=>{
    if(! mongoose.isValidObjectId(req.params.id)){
        res.status(400).send("Invalid Product Id");
    }
    //const category = await Category.findById(req.body.category);
    //if (!category) return res.status(401).send("Invalid Category")

    const product =await Product.findByIdAndUpdate(
        req.params.id,
        
        {
            $pull: { subscribed_user: req.body.subscribed_user }
             
        },
        {new: true}
    )

    if(!product){
        return res.status(404).send('the product cannot be updated!');
    }

    res.send(product);

})

router.put("/append/subscribed_user/:id", async (req,res)=>{
    if(! mongoose.isValidObjectId(req.params.id)){
        res.status(400).send("Invalid Product Id");
    }
    //const category = await Category.findById(req.body.category);
    //if (!category) return res.status(401).send("Invalid Category")

    const product =await Product.findByIdAndUpdate(
        req.params.id,
        
        {
            $push: { subscribed_user: req.body.subscribed_user }
             
        },
        {new: true}
    )

    if(!product){
        return res.status(404).send('the product cannot be updated!');
    }

    res.send(product);

})

router.delete(`/:id`, (req,res)=>{
    Product.findByIdAndRemove(req.params.id).then(product =>{
        if(product){
            return res.status(200).json({
                success:true,
                message:'the product has been removed!'
            })
        }else{
            return res.status(404).json({
                success:false,
                message:'the product has not been found!'
            })
        }
    }).catch(err=>{
        return res.status(400).json({
            success:false,
            error: err
        })
    })
})

router.get(`/get/count`, async (req, res) =>{

    const productCount = await Product.countDocuments((count)=>count);

    if(!productCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        productCount: productCount
    });
})

// router.get(`/get/featured`, async (req, res) =>{

//     const products = await Product.find({isFeatured: true});

//     if(!products) {
//         res.status(500).json({success: false})
//     } 
//     res.send(products);
// })


// router.get(`/get/featured/:count`, async (req, res) =>{
//     const count = req.params.count ? req.params.count : 0
//     const products = await Product.find({isFeatured: true}).limit(+count);

//     if(!products) {
//         res.status(500).json({success: false})
//     } 
//     res.send(products);
// })

module.exports =router;
