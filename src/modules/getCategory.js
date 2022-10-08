import { getData } from "./getData";
import { API__URL } from "./const";
import { store } from "./store";

export const getCategory = async () => {
    const data = await getData(`${API__URL}/api/category`);
    store.category = data;
};