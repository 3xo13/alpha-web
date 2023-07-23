export default async function findProduct ({category,productName,dataArray}) {
    let result = null;
    console.log('category',category);
    console.log('productName',productName);
    return result;
    // const categoryObject = dataArray.find((item) => item.name === category);
    // const sub = categoryObject.subCategories.forEach((item) => {
    //     if(item.products){
    //         const product = item.products.find((product) => product.name === productName);
    //         result = product;
    //     }else{
    //         item.subSubCategories.forEach((subSub) => {
    //             const product = subSub.products.find((product) => product.name === productName);
    //             result = product;
    //         });
    //     }
    // });
    // return result;
}