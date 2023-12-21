import {useRef } from 'react'

import { Title } from '../header/components/Title'
import { Cart } from '../header/components/Cart'
import { CartModal } from '../header/components/CartModal'

export const Header = ({cartContent}) => {
    const isModalOpen = useRef(null);

    const handleCart = () => {
        isModalOpen.current.showModal();
    }

    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart cartContent={cartContent} handleCart={handleCart}>Cart</Cart>
            <CartModal modalRef={isModalOpen} />
        </header>
    );
    }