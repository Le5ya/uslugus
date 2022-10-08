import { renderList } from "./renderList";
import { API__URL } from "./const";

export const searchControl = () => {
    const searchForm = document.querySelector('.search'); 

    searchForm.addEventListener('submit', e => {
        e.preventDefault();

        renderList(`${API__URL}/api/service?search=${searchForm.search.value}`)
    })
}