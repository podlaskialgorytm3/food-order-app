export const Cart = ({children,cartContent,showModal}) => {
    const cartContentLength = cartContent.length || 0;
    return(
        <button onClick={showModal}>
            {`${children} (${cartContentLength})`}
        </button>
    )
}