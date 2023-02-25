import { API_URL } from "./config";

const getById = async (idMeal) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + idMeal);
    return await response.json();
};

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
};

const getFilteredCategory = async (nameCategory) => {
    const response = await fetch(API_URL + 'filter.php?c=' + nameCategory);
    return await response.json();
};

export { getAllCategories, getFilteredCategory, getById };
