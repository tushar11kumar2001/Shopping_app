
import axios from "axios";
const usegetProducts = async () => {

    const response = await axios.get(import.meta.env.VITE_URL);
    return response.data;
}

export default usegetProducts;
