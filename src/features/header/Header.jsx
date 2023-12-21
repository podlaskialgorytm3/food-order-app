import {useRef } from 'react'

import { Title } from '../header/components/Title'
import { Cart } from '../header/components/Cart'
import { CartModal } from '../header/components/CartModal'

import { useModal } from './hooks/useModal'

export const Header = ({cartContent}) => {
    const {showModal,closeModal,isModalOpen} = useModal();

    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart cartContent={cartContent} showModal={showModal}>Cart</Cart>
            <CartModal modalRef={isModalOpen} closeModal={closeModal}/>
        </header>
    );
    }