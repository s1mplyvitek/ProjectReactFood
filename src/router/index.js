import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import AboutPage from "../components/pages/aboutPage/AboutPage";
import FavoritesPage from "../components/pages/FavoritesPage";
import RestaurantsPage from "../components/pages/restaurantsPage/RestaurantsPage";
import SupportPage from "../components/pages/SupportPage";
import ActionsPage from "../components/pages/actionsPage/ActionsPage";
import WorkPage from "../components/pages/workPage/WorkPage";
import IdCardPage from "../components/pages/IdCardPage";
import MenuCategoriesCards from "../components/pages/MenuCategoriesCardsPage.js";
import ReviewsPage from "../components/pages/ReviewsPage";
import IdRestaurantPage from "../components/pages/restaurantsPage/IdRestaurantPage";
import IdActionPage from "../components/pages/actionsPage/IdActionPage";




const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/category/:slug", element: <MenuCategoriesCards /> },
            { path: "/dish/:id", element: <IdCardPage /> },
            { path: "/restauran/:id", element: <IdRestaurantPage /> },
            { path: "/action/:id", element: <IdActionPage /> },
            { path: "/", element: <MainLayout /> },

            { path: "favorites", element: <FavoritesPage /> },
            { path: "restaurants", element: <RestaurantsPage /> },
            { path: "support", element: <SupportPage /> },
            { path: "actions", element: <ActionsPage /> },
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