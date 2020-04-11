const CATEGORIES = "http://127.0.0.1:3000/categories"

export function getCategories(){
    return fetch(CATEGORIES).then(res => res.json())
};