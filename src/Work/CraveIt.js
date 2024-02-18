// Food Delivery portal
import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Profile from "./components/Profile.js";
import Error from "./components/Error.js";
// import Grocery from "./components/Grocery.js";
import RestaurantDetails from "./components/RestaurantDetails.js";

const Grocery = lazy(() => import('./components/Grocery.js'))   // Lazy Loading

/**
 * - Header
 *  - Logo
 *  - NavItems
 * - Body
 *  - Search
 *  - CardContainer
 *    - Card
 * - Footer
 *  - Copyright
 *  - Links
 *  - Address
 */
function resizeHeaderOnScroll() {
    const distanceY = window.scrollY || document.documentElement.scrollTop,
        shrinkOn = 10,
        headerElement = document.getElementById("header");

    if (distanceY > shrinkOn) {
        headerElement.classList.add(`widen`);
        headerElement.classList.add(`w-full`);
        headerElement.classList.add(`bg-widen`);
        headerElement.classList.add(`text-black`);
        headerElement.classList.add(`rounded-none`);
        headerElement.classList.add(`!top-0`);
    } else {
        headerElement.classList.remove(`widen`);
        headerElement.classList.remove(`w-full`);
        headerElement.classList.remove(`bg-widen`);
        headerElement.classList.remove(`text-black`);
        headerElement.classList.remove(`rounded-none`);
        headerElement.classList.remove(`!top-0`);
    }
}

window.addEventListener("scroll", resizeHeaderOnScroll);

const AppContainer = () => {
    return (
        <div className="App">
            <Header />
            <Outlet />
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppContainer />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>{'Loading page'}</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:restId",
                element: <RestaurantDetails />,
            },
        ],
        errorElement: <Error />,
    },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    // <StrictMode>
    <RouterProvider router={appRouter} />
    // </StrictMode>
);
