import { Title } from '../header/components/Title'
import { Cart } from '../header/components/Cart'
import { CartModal } from '../header/components/CartModal'

import { useModal } from './hooks/useModal'

export const Header = ({cartContent}) => {
    const {showModal,closeModal,isModalOpen} = useModal();

    const itemQuantity = cartContent.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart showModal={showModal}>Cart ({ itemQuantity || 0})</Cart>
            <CartModal modalRef={isModalOpen} closeModal={closeModal} cartContent={cartContent}/>
        </header>
    );
    }