import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import All from "../components/All";
import AboutPage from "../components/pages/AboutPage";
import FavorPage from "../components/pages/FavorPage";
import WallPage from "../components/pages/WallPage";
import HelpPage from "../components/pages/HelpPage";
import FillPage from "../components/pages/FillPage";
import FriendsPage from "../components/pages/FriendsPage";
import IdPage from "../components/idPage";
import MenuCategoriesCards from "../components/pages/MenuCategoriesCardszPage.js";




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