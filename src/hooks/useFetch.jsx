import { useState, useEffect } from "react";

const fetchData = async () => {
    const response = await fetch("http://localhost:3000/meals");
    const data = await response.json();

    if(!response.ok){
        throw new Error("Meals fetch failed!");
    }

    return data;
}

export const useFetch = (initialValue) => {
    const [meals, setMeals] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            try{
                const data = await fetchData();
                setMeals(data);
            }catch(error){
                setError({
                    message: error.message || "Meals fetch failed!"
                });
            }
            setIsLoading(false);
            fetchMeals()
        }
    },[fetchData])

    return {
        meals,
        isLoading,
        error
    }
}