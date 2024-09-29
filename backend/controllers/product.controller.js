export const getProducts = async(req,res)=>{
    try {
        const products = await Product.find({});//不要丢了空对象
        res.status(200).json({success:true,data:products});//把查询到的产品信息放入返回体的data中
    } catch (error) {
        console.log("error in fetching products:",error.message);
        res.status(500).json({success:false,message:"Server Error"});
    }
}


export const createProduct = async(req,res)=>{
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
    }catch(error){
        console.error("error in create product:",error.message);
        res.status(500).json({success:false,message:"server error"});
    }
}


export const updateProduct = async (req,res)=>{
    //从请求体中获得待修改产品的id字段
    const {id}= req.params;
    const product = req.body;
    //id不可用的情况下返回错误提示
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"Invalid Product Id"});
    }
    try {
        const updateProduct = await Product.findByIdAndUpdate(id,product,{new:true});
        res.status(200).json({success:true,data:updateProduct});
    } catch (error) {
        res.status(500).json({success:false,message:"Server Error"});
    }

}

export const deletProduct = async (req,res)=>{
    //从请求体中获得待删除产品的id字段
    const {id}= req.params;
    try{
        //mongoose管理中提供了delet方法
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"Product deleted"});
    }catch(error){
        res.status(404).json({success:false,message:"Product not found"});
    }
}