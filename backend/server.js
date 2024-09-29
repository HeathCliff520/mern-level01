import express from "express";

//处理连接密钥
import dotenv from "dotenv";
dotenv.config();


const app = express();

//二、客户端的具体请求操作，服务器给予的返回信息.方法中的路径是端口下的目录结构
// app.get("/",(req,res)=>{ //链接首页返回一个字符串
//     res.send("server is ready");
// })

app.get("/products",(res,req)=>{

})




//一、服务启动，监听客户端的链接请求
app.listen(5000,()=>{
    console.log("server start at http://localhost:5000");
})