import { useFetch } from "../../../hooks/useFetch"

import { fetchMeals } from "../../meals/utils/fetchMeals"


export const CartModal = ({modalRef,closeModal,cartContent,handleQuantity}) => {
    const { fetchedData: meals, isLoading, error } = useFetch(fetchMeals,[]);

    const cartMeals = meals.filter(meal => cartContent.some(item => item.id === meal.id));
    const cartOrder = cartMeals.map(meal => {
        const cartItem = cartContent.find(item => item.id === meal.id);
        return { ...meal, quantity: cartItem.quantity };
    });

    return(
        <dialog className="modal" ref={modalRef}>
            <h2>Your food!</h2>
            <ul className="cart-items">
                <li>
                    {cartOrder.map((meal) => (
                        <div key={meal.id} className="cart-item">
                            <p>{meal.name} - {meal.price} zł</p>
                            <p>
                            <span className="mini-button" onClick={() => handleQuantity(meal.id,"MINUS")}>-</span>
                            <b>{meal.quantity}</b>
                            <span className="mini-button" onClick={() => handleQuantity(meal.id,"PLUS")}>+</span>
                            </p>
                        </div>
                    ))}
                </li>
            </ul>
            <div className="cart-total">
                <p>Total:  </p>
                <p>{cartOrder.reduce((acc, item) => acc + item.price * item.quantity, 0)} zł</p>
            </div>
            <div className="cart-actions">
                <div className="cart-button" onClick={closeModal}>Close</div>
            </div>
        </dialog>
    )
}