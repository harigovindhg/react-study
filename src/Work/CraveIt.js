// Food Delivery portal
import React from "react";
import ReactDom from "react-dom/client";
import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "../Work/components/Header.js";
import Body from "../Work/components/Body.js";
import About from "../Work/components/About.js";
import Profile from "../Work/components/Profile.js";
import Error from "../Work/components/Error.js";
import RestaurantDetails from "./components/RestaurantDetails.js";

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
        headerElement.classList.add("widen");
    } else {
        headerElement.classList.remove("widen");
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
                path: "/restaurants/:restId",
                element: <RestaurantDetails />,
            },
        ],
        errorElement: <Error />,
    },
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <RouterProvider router={appRouter} />
    </StrictMode>
);
