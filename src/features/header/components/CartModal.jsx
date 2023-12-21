export const CartModal = ({modalRef,closeModal}) => {

    return(
        <dialog className="modal" ref={modalRef}>
            <h2>Your food!</h2>
            <ul>

            </ul>
            <div className="cart-actions">
                <div className="cart-button" onClick={closeModal}>Close</div>
            </div>
        </dialog>
    )
}