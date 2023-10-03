
import getCategories from './getCategories'
import getProducts from "./getProducts";

export default async function creatTree() {

    try { // connect to dataBase
        // get all categories where subCategories is null
        const categories = await getCategories(
            {"subCategories.name": null, "subCategories.parent": null}
        );
        // get all subCategories
        const subCategories = await getCategories({
            "subCategories.name": {$ne: null},"subSubCategories.name": null});
        // get all subSubCategories
        // const subSubCategories = await getCategories({
        //     "subSubCategories.name": {$ne: null},"subSubCategories.parent": {$ne: null}});
        // get all products
        // const products = await getProducts({});

        // tree structured categories with subCategories
        const tree = categories.map(category => {
            const subCategory = subCategories.filter(
                subCategory => subCategory.subCategories.parent === category.name
            )
            return ({
                name: category.name,
                subCategories: subCategory.map(
                    // , subSubCategories: []
                    subCategory => ({name: subCategory.subCategories.name})
                )
            })

        })
        // add subSubCategories to subCategories
        // subSubCategories.forEach(object => {
        //     tree.forEach(category => {
        //         category
        //             .subCategories
        //             .forEach(el => {
        //                 if (object.subSubCategories.parent === el.name) {
        //                     el
        //                         .subSubCategories
        //                         .push({name: object.subSubCategories.name, products: []})
        //                 }
        //             })
        //     })
        // })

        // add products to subCategories or subSubCategories
        // products.forEach(product => {
        //     tree.forEach(el => {
        //         if (product.subSubCategory === null) { // if product has no subSubCategory add it to subCategory
        //             if (product.category === el.name) {
        //                 el
        //                     .subCategories
        //                     .forEach(sub => {
        //                         if (sub.name === product.subCategory) {
        //                             if (
        //                                 sub
        //                                     ?.products
        //                             ) { // if subCategory has products add product to it
        //                                 sub
        //                                     .products
        //                                     .push({
        //                                         name: product.name,
        //                                         image: product.images[0],
        //                                         id: product._id,
        //                                         category: product.category,
        //                                         subCategory: product.subCategory,
        //                                         subSubCategory: product.subSubCategory
        //                                     })
        //                             } else { // if subCategory has no products add products array to it
        //                                 sub.products = [
        //                                     {
        //                                         name: product.name,
        //                                         image: product.images[0],
        //                                         id: product._id,
        //                                         category: product.category,
        //                                         subCategory: product.subCategory,
        //                                         subSubCategory: product.subSubCategory
        //                                     }
        //                                 ]
        //                             }

        //                         }
        //                     })
        //             }
        //         } else { // if product has subSubCategory add it to subSubCategory
        //             if (product.category === el.name) {
        //                 el
        //                     .subCategories
        //                     .forEach(sub => {
        //                         if (sub.name === product.subCategory) {
        //                             sub
        //                                 .subSubCategories
        //                                 .forEach(subSub => {
        //                                     if (subSub.name === product.subSubCategory) {
        //                                         subSub
        //                                             .products
        //                                             .push({
        //                                                 name: product.name,
        //                                                 image: product.images[0],
        //                                                 id: product._id,
        //                                                 category: product.category,
        //                                                 subCategory: product.subCategory,
        //                                                 subSubCategory: product.subSubCategory
        //                                             })
        //                                     }
        //                                 })
        //                         }
        //                     })
        //             }
        //         }
        //     })
        // })

        return tree

    } catch (error) {
        console.log(error);
    }
}
