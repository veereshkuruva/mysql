const express =require("express");
const connection = require('../sql')
const router = express.Router();

router.post('/create',(req,res,next)=>{
    let product= req.body;
    query = 'insert into product (name,description,price) values(?,?,?)';
    connection.query(query,[product.name,product.description,product.price],(err,result)=>{
        if(!err){
            return res.status(200).json({message:"product added sucessfully"})
        }
        else
        return res.status(500).json(err);
    })
})

router.get('/read',(req,res,next)=>{
    var query = "select *from product";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.status(200).json(result);
        }
        else
        return res.status(500).json(err);
    }
    )
})

router.patch("/update/:id",(req,res,next)=>{
    const id = req.params.id;
    let product =req.body;
    var query = "update product set `name`=?,`description`=?,`price`=? where `id`=?";
    connection.query(query,[product.name,product.description,product.price,id],(err,result)=>{
        if(!err){
            if(result.affectedRows == 0){
                return res.status(404).json({message:"product id is not found"});
            }
            return res .status(200).json({message:" product updated sucessfully"});
        }
        else 
        return res.status(500).json(err)
    })
})

router.delete("/delet/:id",(req,res,next)=>{
    const id =req.params.id;
    var query = 'delete from product';
    connection.query(query,[id],(err,reesult)=>{
        if(!err){
            /* if(result.affectedRows == 0){
                return res.status(404).json({message:"product id is not found"});
            } */
            return res .status(200).json({message:" product deleted sucessfully"});
        }
        else 
        return res.status(500).json(err)
    })
})

module.exports = router;