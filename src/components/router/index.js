import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import All from "../All";
import AboutPage from "../pages/AboutPage";
import FavorPage from "../pages/FavorPage";
import WallPage from "../pages/WallPage";
import HelpPage from "../pages/HelpPage";
import FillPage from "../pages/FillPage";
import FriendsPage from "../pages/FriendsPage";
import IdPage from "../idPage";
import MenuCategoriesCards from "../pages/MenuCategoriesCardsPage.js";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "/category/:slug", element: <MenuCategoriesCards />},
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

        ]
    },


]);

export default router;