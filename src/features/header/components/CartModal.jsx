import { Loading } from "../../loading/Loading";

export const CartModal = ({modalRef,closeModal,fetchMeals,handleQuantity,showCheckoutModal}) => {
    const {cartOrder,isLoading,error} = fetchMeals;
    
    const total = cartOrder.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    return(
        <dialog className="modal" ref={modalRef}>
            <h2>Your food!</h2>
            {isLoading && (<Loading />)}
            {error && <p>{error.message}</p>}
            {!isLoading && (
                <>
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
                <p>{total} zł</p>
            </div>
            <div className="cart-actions">
                <div className="cart-button" onClick={closeModal}>Close</div>
                {cartOrder.length > 0 && (<div className="cart-button" onClick={showCheckoutModal}>Go to checkout</div>)}
            </div>
                </>
            )}
        </dialog>
    )
}