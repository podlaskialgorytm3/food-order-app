import { Title } from '../header/components/Title'
import { Cart } from '../header/components/Cart'

export const Header = () => {
    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart>Cart</Cart>
        </header>
    );
    }