import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import All from "../All";
import AboutPage from "../pages/AboutPage";
import FavorPage from "../pages/FavorPage";
import WallPage from "../pages/WallPage";
import HelpPage from "../pages/HelpPage";
import FillPage from "../pages/FillPage";
import FriendsPage from "../pages/FriendsPage";
import BurgerPage from "../pages/categoryPages/burgerPage";
import ChickenPage from "../pages/categoryPages/chickenPage";
import PizzaPage from "../pages/categoryPages/pizzaPage";
import FreePage from "../pages/categoryPages/freePage";
import SaladPage from "../pages/categoryPages/saladPage";
import IdPage from "../idPage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/catalog/:id", element: <IdPage />},
            { path: "/", element: <All /> },
            {
                path: "about", element: <Outlet />,
                children: [
                    { path: "", element: <AboutPage /> },
                    {
                        path: "contacts", element: (
                            <div>
                                <a href="tel:+79241234567">89241234567</a>
                            </div>
                        )
                    }
                ]
            },                      
            {path: "favor", element: <FavorPage />},
            {path: "wallet", element: <WallPage />},
            {path: "help", element: <HelpPage />},
            {path: "fill", element: <FillPage />},
            {path: "friends", element: <FriendsPage />},
            {path: "burgerPage", element: <BurgerPage />},
            {path: "pizzaPage", element: <PizzaPage />},
            {path: "chickenPage", element: <ChickenPage />},
            {path: "freePage", element: <FreePage />},
            {path: "saladPage", element: <SaladPage />},

        ]
    },


]);

export default router;