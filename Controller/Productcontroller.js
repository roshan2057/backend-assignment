const Product = require('../Model/Products')


const create= async(req,res)=>{
    try{
        //requesting data from incomming http body
value={
    name:req.body.name,
    description:req.body.description,
    price: req.body.price
}
// Adding new data
const add = await Product.create(value)
if(add){
    res.json({data: "Added Sucessfully"})
}
    }
    catch{
        console.log("Error in adding")
    }
}

const update= async(req,res)=>{
    try{
        // Getting id form get requst in url
        id= parseInt(req.params.id);
        value={
            name:req.body.name,
            description:req.body.description,
            price: req.body.price
        }
        // Update new data
        const edit = await Product.update(value,{where:{product_id: id}})
        if(edit){
            res.json({data: edit})
        }
    }
    catch{
        console.log("Error in update")
    }
}

const remove= async(req,res)=>{
try{
id= req.params.id;
//Deleteing the product
const deleteproduct = await Product.destroy({where:{product_id:id}})
if(deleteproduct){
    res.json({data: "Deleted sucessfully"})
}
else{
    res.json({data: "Cannot Delete product"})
}
}
catch{
    console.log("Error in Delete")
}
}

// this module extract all the product 
// if we want specific product we can simpley add another function that gets the product id
const info = async(req,res)=>{
    try{
        const data = await Product.findAll();
        if(data){
            res.json({Products: data})
        }
        else{
            res.json({data: "No Products found"})
        }
    }
    catch{
        console.log("Error in getting product")
    }
}

module.exports={
    create,
    update,
    remove,
    info,
}