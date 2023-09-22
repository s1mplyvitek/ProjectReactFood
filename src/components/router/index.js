import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import All from "../All";
import AboutPage from "../pages/aboutPage/AboutPage";
import FavorPage from "../pages/FavorPage";
import WallPage from "../pages/WallPage";
import HelpPage from "../pages/HelpPage";
import FillPage from "../pages/FillPage";
import FriendsPage from "../pages/FriendsPage";
import IdPage from "../idPage";
import MenuCategoriesCards from "../pages/MenuCategoriesCardsPage.js";
import BestPage from "../pages/BestPage";
import RestaurantPage from "../pages/RestaurantPage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/category/:slug", element: <MenuCategoriesCards /> },
            { path: "/catalog/:id", element: <IdPage /> },
            { path: "/place/:id", element: <RestaurantPage /> },
            { path: "/", element: <All /> },

            { path: "favor", element: <FavorPage /> },
            { path: "wallet", element: <WallPage /> },
            { path: "help", element: <HelpPage /> },
            { path: "fill", element: <FillPage /> },
            { path: "best", element: <BestPage /> },

        ]
    },
    { path: "/friends", element: <FriendsPage /> },
    {
        path: "/about", element: <Outlet />,
        children: [
            { path: "", element: <AboutPage /> },
            {
                path: "contacts", element: (
                    <div className="w-2/3 mx-auto grow">
                        <a href="tel:+79241234567">89241234567</a>
                    </div>
                )
            }
        ]
    },

]);

export default router;