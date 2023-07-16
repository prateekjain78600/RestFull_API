const product=require('../model/Product')

const getAllProduct=async(req,res)=>{
    const {company,name,featured,sort,select} =req.query;
    const queryObject={};

    if(company){
        queryObject.company=company;
    }
    if(featured){
        queryObject.featured=featured;
    }
    if(name){
        queryObject.name={$regex:name,$options:"i"}
    }

    //sort
    let ApiData=product.find(queryObject)
    if(sort){
        let sortFix=sort.split(",").join(" ");
        ApiData=ApiData.sort(sortFix);
    }

    //select 
    if(select){
        let selectFix=select.split(",").join(" ");
        ApiData=ApiData.select(selectFix);
    }

    //pagination
    let page=Number(req.query.page) || 1;
    let limit=Number(req.query.limit)|| 2;

    let skip=(page-1)*limit;
    ApiData=ApiData.skip(skip).limit(limit);

    console.log(queryObject);
    const data= await ApiData;
    res.status(200).json(data);
}
const getAllProductTesting=async(req,res)=>{
    const data= await product.find({});
    res.status(200).json(data);
}

module.exports={getAllProduct,getAllProductTesting};
