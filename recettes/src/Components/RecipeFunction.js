import { config } from "../config";



class RecipeFunction {
    constructor() {}

    categories = "categories.php";
    filterCategory = "filter.php?c=";
    lookupMeal = "lookup.php?i=";
    baseUrl = config.baseUrl;

    async getAllCategories() {
        const res = await fetch(`${this.baseUrl}${this.categories}`);
        if (!res.ok) throw new Error();
        return await res.json();
    };

    async getCategory(category) {
        const res = await fetch(`${this.baseUrl}${this.filterCategory}${category}`);
        if (!res.ok) throw new Error();
        return await res.json();
    }

    async getMeal(id) {
        const res = await fetch(`${this.baseUrl}${this.lookupMeal}${id}`);
        if (!res.ok) throw new Error();
        return await res.json();
    }

}

export default RecipeFunction;