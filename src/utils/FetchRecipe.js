import { useEffect, useState } from "react";
const apiKey = import.meta.env.VITE_API_KEY;

const FetchRecipe = () => {

    const [info, setInfo] = useState([]);


    const Fetching = async () => {
        const recipeInfo = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&cuisine=Indian&addRecipeInformation=true&number=80`);
        const json = await recipeInfo.json();
        setInfo(json.results);

    }
    useEffect(() => {
        Fetching();

    }, [])

    return { info };
}

export default FetchRecipe; 