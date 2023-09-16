import getCategories from "@/functions/getCategories";
import getOneProduct from "@/functions/getOneProduct";
import CategoryCard from "@/components/navigation/CategoryCard";
import { v4 as uuidv4 } from 'uuid';

const categories = async () => {
    let cards;
    try {
        const categories = await getCategories({'subCategories.name': null});
        cards = await categories?.map(async (category) => {
            const name = category.name;
            const product = await getOneProduct({category: name});
            const image = product?.images[0] || '/assets/images/logo.png'
            return (<CategoryCard
                categoryObject={{
                    name: name,
                    image: image
                }}/>)
        });
        
    } catch (error) {
        // console.log(error);
        cards = <p>{error}</p>
    }

    return (
        <div key={uuidv4()} className="w-screen h-fit flex flex-row flex-wrap p-10 pt-36">
            {cards}
        </div>
    )
}

export default categories