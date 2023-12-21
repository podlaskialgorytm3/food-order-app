export const Cart = ({children,cartContent}) => {
    const cartContentLength = cartContent.length || 0;
    return(
        <button>
            {`${children} (${cartContentLength})`}
        </button>
    )
}