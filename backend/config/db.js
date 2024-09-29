import mongoose from "mongoose";



//用于程序启动进行数据库连接，这个函数会被接听入口程序调用
export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)  //注 此处未导入dotenv，是因为此文件会被server使用，server已经导入dotenv。这里不再导入
        console.log("mongonDb Connected: ${conn.connection.host}");
    } catch(error){
        console.error('Error:${error.massage}');
        process.exit(1); //1 is failure;0 is success 
    }
}



