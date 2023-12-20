import { Title } from '../header-feature/components/Title'
import { Cart } from '../header-feature/components/Cart'

export const Header = () => {
    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart>Cart</Cart>
        </header>
    );
    }