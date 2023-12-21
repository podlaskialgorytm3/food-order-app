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
  const [isSendingOrder, setIsSendingOrder] = useState(false);

  const handleButton = (id) => {
    setCartContent((prevState) => {
      const existingItem = prevState.find(item => item.id === id);
      if (existingItem) {
        return prevState.map(item => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
      } else {
        return [...prevState, {
          id,
          quantity: 1
        }];
      }
    });
  }

  const handleQuantity = (id, action) => {
    setCartContent((prevState) => {
      const updatedState = prevState.map(item => {
        if (item.id === id) {
          if (action === "PLUS") {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          } else if (action === "MINUS") {
            return {
              ...item,
              quantity: item.quantity - 1
            };
          }
        }
        return item;
      });

      return updatedState.filter(item => item.quantity > 0);
    });
  }

  const handleSendOrder = (isSending) => {
    setIsSendingOrder(isSending);
  }
  if(isSendingOrder){
    setCartContent([]);
    setIsSendingOrder(false);
  }

  return (
    <>
      <Header cartContent={cartContent} handleQuantity={handleQuantity} handleSendOrder={handleSendOrder} />
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
