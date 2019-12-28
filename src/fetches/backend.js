const CATEGORIES = "http://localhost:3000/categories"

export function getCategories(){
    return fetch(CATEGORIES).then(res => res.json())
};