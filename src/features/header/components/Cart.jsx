export const Cart = ({children,cartContent,handleCart}) => {
    const cartContentLength = cartContent.length || 0;
    return(
        <button onClick={handleCart}>
            {`${children} (${cartContentLength})`}
        </button>
    )
}