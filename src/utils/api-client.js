
import axios from "axios";
const getProducts = async () => {
    // console.log('URL', import.meta.env.VITE_URL);
    const response = await axios.get(import.meta.env.VITE_URL);
    // console.log(response.data);
    return response.data;
}

export default getProducts;
