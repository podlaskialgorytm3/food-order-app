import { Header } from "./features/header-feature/Header";
import { MealsContainer } from "./features/meals-feature/MealsContainer";
import { MealItem } from "./features/meals-feature/components/MealItem";
import { Loading } from "./features/loading-feature/Loading";

import { useFetch } from "./hooks/useFetch";

import { fetchData } from "./utils/fetchData";

function App() {
  const { meals, isLoading, error } = useFetch(fetchData,[]);

  return (
    <>
      <Header />
      {isLoading && (<Loading />)}
      {error && <p>{error.message}</p>}
      <MealsContainer>
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
