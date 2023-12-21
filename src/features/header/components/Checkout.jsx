export const Checkout = ({modalRef}) => {

    return(
        <dialog className="modal" ref={modalRef}>
            <h2>Checkout</h2>
            <p>Tolal checkout.</p>
            <form className="form">
                <div className="control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                </div>
                <div className="control">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" />
                </div>
                <div className="control">
                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" />
                </div>
                <div className="control">
                    <label htmlFor="postal">Postal Code</label>
                    <input type="text" id="postal" />
                </div>
                <div className="control">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" />
                </div>
                <div className="cart-actions">
                    <div className="cart-button">Cancel</div>
                    <div className="cart-button">Confirm</div>
                </div>
            </form>
        </dialog>
    )
}