import { useState } from "react";

import { Header } from "./features/header/Header";
import { MealsContainer } from "./features/meals/MealsContainer";
import { MealItem } from "./features/meals/components/MealItem";
import { Loading } from "./features/loading/Loading";

import { useFetch } from "./hooks/useFetch";

import { fetchMeals } from "./features/meals/utils/fetchMeals";

function App() {
  const { fetchedData: meals, isLoading, error } = useFetch(fetchMeals,[]);
  const [ cartContent, setCartContent ] = useState([])

  const handleButton = (id) => {
    setCartContent((prevState) => [...prevState, id])
  }

  return (
    <>
      <Header cartContent={cartContent} />
      {isLoading && (<Loading />)}
      {error && <p>{error.message}</p>}
      <MealsContainer>
            {!isLoading && (
              meals.map((meal) => 
              ( <MealItem 
              key={meal.id}
              id={meal.id}
              name={meal.name} 
              price={meal.price} 
              description={meal.description} 
              image={meal.image}
              handleButton={handleButton}
              />)
              ))}
            
      </MealsContainer>
    </>
  );
}

export default App;
