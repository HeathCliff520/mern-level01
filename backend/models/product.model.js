//mongodb的结构
// -Collections（库名： MERNLEVEL01）
//     --collection1（表名：products）
//         ---doc01 （表项:product01）
//         ---doc02 （表项:product02）
//         ---doc01 （表项:product03）
//     --collection2（表名：users）
//         ---doc01 （表项：user01）
//         ---doc02 （表项：user02）
//         ---doc01 （表项：user03）
//     --collection3
//         ---doc01
//         ---doc02
//         ---doc01
//     --collection4
//         ---doc01
//         ---doc02
//         ---doc01

//product表操作处理

import mongoose from "mongoose";

//pruduct表项结构
const productSchema = new mongoose.Schema({
    name:{type:String,require:true},
    price:{type:Number,require:true},
    image:{type:String,require:true},
},{
    timestamps:true
});

//成表,collection01
const Product = mongoose.model('Product',productSchema);
export default Product;