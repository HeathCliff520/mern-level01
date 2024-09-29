import express from "express";
import { connectDB } from "./config/db";
import productRoutes from "./routes/product.routes.js";

//处理连接密钥
import dotenv from "dotenv";
dotenv.config();


const app = express();
app.use(express.json());//允许后端接收json文件

//二、客户端的具体请求操作，服务器给予的返回信息.方法中的路径是端口下的目录结构
// app.get("/",(req,res)=>{ //链接首页返回一个字符串
//     res.send("server is ready");
// })
app.use("api/products",productRoutes);


//一、服务启动，监听客户端的链接请求
app.listen(5000,()=>{
    //数据库链接
    connectDB
    console.log("server start at http://localhost:5000");
})