import { Header } from "./features/header-feature/Header";
import { MealsContainer } from "./features/meals-feature/MealsContainer";
import { MealItem } from "./features/meals-feature/components/MealItem";

import { useFetch } from "./hooks/useFetch";

import { fetchData } from "./utils/fetchData";

function App() {
  const { meals, isLoading, error } = useFetch(fetchData,[]);

  return (
    <>
      <Header />
      <MealsContainer>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {!isLoading && (
              meals.map((meal) => 
              ( <MealItem 
              key={meal.id} 
              name={meal.name} 
              price={meal.price} 
              description={meal.description}
              image={meal.image}
              />)
              ))}
      </MealsContainer>
    </>
  );
}

export default App;
