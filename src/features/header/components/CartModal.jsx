export const CartModal = ({modalRef,closeModal}) => {

    return(
        <dialog className="modal" ref={modalRef}>
            <h2>Your food!</h2>
            <ul>

            </ul>
            <button onClick={closeModal}>Close</button>
        </dialog>
    )
}