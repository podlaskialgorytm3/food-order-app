import { Header } from "./features/header-feature/Header";
import { MealsContainer } from "./features/meals-feature/MealsContainer";

import { useFetch } from "./hooks/useFetch";

function App() {
  const { meals, isLoading, error } = useFetch([]);


  return (
    <>
      <Header />
      <MealsContainer>
        
      </MealsContainer>
    </>
  );
}

export default App;
