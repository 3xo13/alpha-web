import useTree from "@/dataMangment/treeDataStore";
import useProduct from "@/dataMangment/productDataStore";

export default async function setProductStore({id}) {
    const { Tree } = useTree.getState()
    
    Tree.forEach(category => {
        category.subCategories.forEach(subCategory => {
            if(subCategory.products){
                subCategory.products.forEach(product => {
                    if(product._id === id){
                        useProduct.setState(product)
                        return true
                    }
                })
            }
            subCategory.subSubCategories.forEach(subSubCategory => {
                if(subSubCategory.products){
                    subSubCategory.products.forEach(product => {
                        if(product._id === id){
                            useProduct.setState(product)
                            return true
                        }
                    })
                }
            })
        })
    })
    return false
}