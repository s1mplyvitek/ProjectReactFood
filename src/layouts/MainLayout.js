import PopMenu from "../components/main/PopMenu";
import Hero from "../components/main/Hero";
import ActionsCards from "../components/main/ActionsCards";
import CategoriesCardsMenu from "../components/main/CategoriesCardsMenu";



const Main = () => {
    return (
        <main>
            <Hero />
            <CategoriesCardsMenu />
            <ActionsCards />
            <PopMenu />
        </main>
    );
};


export default Main;