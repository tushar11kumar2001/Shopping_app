
import axios from "axios";
const getProducts = async () => {

    const response = await axios.get(import.meta.env.VITE_URL);
    return response.data;
}

export default getProducts;
