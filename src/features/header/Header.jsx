import {useRef } from 'react'

import { Title } from '../header/components/Title'
import { Cart } from '../header/components/Cart'
import { CartModal } from '../header/components/CartModal'

export const Header = ({cartContent}) => {
    const isModalOpen = useRef(null);

    const showModal = () => {
        isModalOpen.current.showModal();
    }
    const closeModal = () => {
        isModalOpen.current.close();
    }

    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart cartContent={cartContent} showModal={showModal}>Cart</Cart>
            <CartModal modalRef={isModalOpen} closeModal={closeModal}/>
        </header>
    );
    }