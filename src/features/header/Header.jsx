import { Title } from '../header/components/Title'
import { Cart } from '../header/components/Cart'
import { CartModal } from '../header/components/CartModal'
import { Checkout } from './components/Checkout'

import { useModal } from './hooks/useModal'

export const Header = ({cartContent,handleQuantity}) => {
    const {showModal: showCart,closeModal: closeCart,isModalOpen: isCartOpen} = useModal();
    const {showModal: showCheckout,closeModal: closeCheckout,isModalOpen: isCheckoutOpen} = useModal();

    const itemQuantity = cartContent.reduce((acc, item) => acc + item.quantity, 0);

    const showCheckoutModal = () => {
        closeCart();
        showCheckout();
    }

    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart showModal={showCart}>Cart ({ itemQuantity || 0})</Cart>
            <CartModal 
            modalRef={isCartOpen} 
            closeModal={closeCart} 
            cartContent={cartContent} 
            handleQuantity={handleQuantity}
            showCheckoutModal={showCheckoutModal}
            />
            <Checkout modalRef={isCheckoutOpen} closeModal={closeCheckout}/>
        </header>
    );
    }