import express from "express";
import { connectDB } from "./config/db";
import Product from "./models/product.model.js";


//处理连接密钥
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());//允许后端接收json文件

//二、客户端的具体请求操作，服务器给予的返回信息.方法中的路径是端口下的目录结构
// app.get("/",(req,res)=>{ //链接首页返回一个字符串
//     res.send("server is ready");
// })
app.post("/products",async(req,res)=>{
    //从请求体中获取产品信息
    const product = req.body;
    //所有表项信息必须完整，缺一不可
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:"please provide all fields"});
    }

    const newProduct = new Product(product);

    try{
        await newProduct.save();
        res.status(201).json({success:true,data:newProduct});
    }catch{
        console.error("error in create product:",error.message);
        res.status(500).json({success:false,message:"server error"});
    }
})




//一、服务启动，监听客户端的链接请求
app.listen(5000,()=>{
    //数据库链接
    connectDB
    console.log("server start at http://localhost:5000");
})