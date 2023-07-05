const Order = require('../Model/Orders')
const Product = require('../Model/Products')


const create = async (req,res)=>{
try{

    // here we are not using any middleware authenticatin 
    // so userid is passed from the body otherwise it can be obtained from decoding the token in the backend itself
value={
    productId:req.body.productId,
    userId:req.body.userId,
    quantity:req.body.quantity
}
// we extract the price of product for db
const data = await Product.findByPk(value.productId);
// calcualte the total amout and add amount property in value object
value.amount = value.quantity* data.price;
//Storing the order data
const store = Order.create(value)
if(store){
   res.json({data: "Order Places sucessfully"})
}
else{
    res.json({data: "Order not placed"})

}
}
catch{
    console.log("Order place error")
}

}

const update= async(req,res)=>{
    try{
        // order is get as params in url
        id= parseInt(req.params.id);
        value={
            productId:req.body.productId,
            userId:req.body.userId,
            quantity:req.body.quantity,
        }
            // we extract the price of product for db
const data = await Product.findByPk(value.productId);
// calcualte the total amout and add amount property in value object
value.amount = value.quantity* data.price;
        
        const store= await Order.update(value,{where:{order_id: id}})
        if(store){
            res.json({data: "updated"})
        }
    }
        catch{
            console.log("error in updating")
        }
    
}


// module to detete a order according to order_id
const remove = async (req,res)=>{
    try{
id= parseInt(req.params.id)
const remove = await Order.destroy({where:{order_id:id}})
if(remove){
    res.json({data: "Deleted sucessfully"})

}
else{
    res.json({data: "Already deleted"})

}
    }
    catch{
        console.log("cannot delete")
    }
}
// retriving order information of specific user only
const orderinfo= async(req,res)=>{
    try{
    id=req.params.id;
    const data = await Order.findAll({where:{userId: id}})
    if(data[0]!= null){
        res.json({data: data})
    }
    else{
        res.json({data: "NO order yet"})
    }
}
catch{
    console.log("Error in retriving order")
}

}


module.exports={
    create,
    update,
    remove,
    orderinfo,
}