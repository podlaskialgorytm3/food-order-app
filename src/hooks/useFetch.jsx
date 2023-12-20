import { useState, useEffect } from "react";

export const useFetch = (fetchData, initialValue) => {
    const [meals, setMeals] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            setIsLoading(true);
            try {
                const data = await fetchData();
                setMeals(data);
            } catch (error) {
                setError({
                    message: error.message || "Meals fetch failed!",
                });
            }
            setIsLoading(false);
        };

        fetchMeals();
    }, []);

    return {
        meals,
        isLoading,
        error,
    };
};
