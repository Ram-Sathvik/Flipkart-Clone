import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
    try {
        await Product.insertMany(products);
        console.log('Data imported successfully');
    } catch (error) {
        console.log('Error while importing data: ', error.message);
    }
}

export default DefaultData;