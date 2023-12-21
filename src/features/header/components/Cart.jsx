export const Cart = ({children,showModal}) => {
    return(
        <button onClick={showModal}>
            {children}
        </button>
    )
}