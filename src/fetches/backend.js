const CATEGORIES = "http://127.0.0.1:3000/categories"
const POI_QUESTIONS = "http://127.0.0.1:3000/categories/6/questions"
// const PROPHET_QUESTIONS = "http://127.0.0.1:3000/categories/7/questions"
// const WII_QUESTIONS = "http://127.0.0.1:3000/categories/8/questions"
// const QURAN_QUESTIONS = "http://127.0.0.1:3000/categories/9/questions"
// const HADITH_QUESTIONS = "http://127.0.0.1:3000/categories/10/questions"

export function getCategories(){
    return fetch(CATEGORIES).then(res => res.json())
};

export function getPOIQuestions(){
    return fetch(POI_QUESTIONS).then(res => res.json())
}