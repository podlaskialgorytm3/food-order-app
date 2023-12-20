import { Header } from "./features/header-feature/Header";
import { MealsContainer } from "./features/meals-feature/MealsContainer";

import { useFetch } from "./hooks/useFetch";

import { fetchData } from "./utils/fetchData";

function App() {
  const { meals, isLoading, error } = useFetch(fetchData,[]);

  return (
    <>
      <Header />
      <MealsContainer>
        
      </MealsContainer>
    </>
  );
}

export default App;
