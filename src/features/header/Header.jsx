import { Title } from '../header/components/Title'
import { Cart } from '../header/components/Cart'

export const Header = ({cartContent}) => {
    return (
        <header id="main-header">
            <Title>ReactFood</Title>
            <Cart cartContent={cartContent}>Cart</Cart>
        </header>
    );
    }