import CategoriesHeader from "../components/header/CategoriesHeader";
import NavbarHeader from "../components/header/NavbarHeader";
import Header from "../components/header/Header";
import CartProvider from "../components/providers/CartProvider";


const HeaderLayout = () => {
    return (
        <header>
            <NavbarHeader />
            <CartProvider>
                <Header />
            </CartProvider>
            <CategoriesHeader />
        </header>
    );
};

export default HeaderLayout;