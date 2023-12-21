import { Title } from '../header/components/Title'
import { Cart } from '../header/components/Cart'
import { CartModal } from '../header/components/CartModal'
import { Checkout } from './components/Checkout'

import { useModal } from './hooks/useModal'

import { useFetch } from "../../hooks/useFetch"

import { fetchMeals } from "../meals/utils/fetchMeals"

export const Header = ({cartContent,handleQuantity}) => {
    const { fetchedData: meals, isLoading, error } = useFetch(fetchMeals,[]);
    const {showModal: showCart,closeModal: closeCart,isModalOpen: isCartOpen} = useModal();
    const {showModal: showCheckout,closeModal: closeCheckout,isModalOpen: isCheckoutOpen} = useModal();

    const showCheckoutModal = () => {
        closeCart();
        showCheckout();
    }

    const itemQuantity = cartContent.reduce((acc, item) => acc + item.quantity, 0);

    const cartMeals = meals.filter(meal => cartContent.some(item => item.id === meal.id));
    const cartOrder = cartMeals.map(meal => {
        const cartItem = cartContent.find(item => item.id === meal.id);
        return { ...meal, quantity: cartItem.quantity };
    });

    const total = cartOrder.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

    const cartOrderObject = {
        cartOrder,
        isLoading,
        error,
        total
    }

    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart showModal={showCart}>Cart ({ itemQuantity || 0})</Cart>
            <CartModal 
            modalRef={isCartOpen} 
            closeModal={closeCart} 
            fetchMeals={cartOrderObject} 
            handleQuantity={handleQuantity}
            showCheckoutModal={showCheckoutModal}
            />
            <Checkout modalRef={isCheckoutOpen} closeModal={closeCheckout} total={total}/>
        </header>
    );
    }