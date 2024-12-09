import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;

const RecipeData = ( recipeId ) => {
    const [detail, setDetail] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}&includeNutrition=false`);
            if (!response.ok) {
                throw new Error("Failed to fetch recipe details");
            }
            const data = await response.json();
            setDetail(data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        if (recipeId) {
            fetchData();
        }
    }, []);
    
    return detail;
};

export default RecipeData;
