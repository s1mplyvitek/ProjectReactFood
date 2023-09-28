import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../../App";
import All from "../All";
import AboutPage from "../pages/aboutPage/AboutPage";
import FavorPage from "../pages/FavorPage";
import WallPage from "../pages/WallPage";
import HelpPage from "../pages/HelpPage";
import FillPage from "../pages/FillPage";
import WorkPage from "../pages/workPage/WorkPage";
import IdPage from "../idPage";
import MenuCategoriesCards from "../pages/MenuCategoriesCardsPage.js";
import ReviewsPage from "../pages/ReviewsPage";
import RestaurantPage from "../pages/RestaurantPage";
import IdFillPage from "../pages/idPage/IdFillPage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/category/:slug", element: <MenuCategoriesCards /> },
            { path: "/catalog/:id", element: <IdPage /> },
            { path: "/place/:id", element: <RestaurantPage /> },
            { path: "/fill/:id", element: <IdFillPage />},
            { path: "/", element: <All /> },

            { path: "favor", element: <FavorPage /> },
            { path: "wallet", element: <WallPage /> },
            { path: "help", element: <HelpPage /> },
            { path: "fills", element: <FillPage /> },
            { path: "reviews", element: <ReviewsPage /> },

        ]
    },
    { path: "/work", element: <WorkPage /> },
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