import { useFetch } from "../../../hooks/useFetch"

import { fetchMeals } from "../../meals/utils/fetchMeals"

export const CartModal = ({modalRef,closeModal,cartContent}) => {
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
                            <p><b>{meal.quantity}</b></p>
                        </div>
                    ))}
                </li>
            </ul>
            <div className="cart-actions">
                <div className="cart-button" onClick={closeModal}>Close</div>
            </div>
        </dialog>
    )
}