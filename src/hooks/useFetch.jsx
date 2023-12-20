import { useState, useEffect } from "react";

export const useFetch = (getData, initialValue) => {
    const [fetchedData, setFetchedData] = useState(initialValue);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const data = await getData();
                setFetchedData(data);
            } catch (error) {
                setError({
                    message: error.message || "Meals fetch failed!",
                });
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return {
        fetchedData,
        isLoading,
        error,
    };
};
