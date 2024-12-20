// Food Delivery portal
import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import Error from "./components/Error.js";
// import Grocery from "./components/Grocery.js";
import RestaurantDetails from "./components/RestaurantDetails.js";
import UserContext from "./utils/UserContext.js";
// import User from "./components/User.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";

const Grocery = lazy(() => import('./components/Grocery.js'));   // Lazy Loading

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
    const [userName, setUserName] = useState();
    useEffect(() => {
        // Call API for Auth based on UN and PW
        const data = {
            name: 'Hari Govind'
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            {/* loggedInUser = Default User */}
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                {/* loggedInUser = Hari Govind */}
                <div className="App">
                    {/* <UserContext.Provider value={{ loggedInUser: 'Elon' }}> */}
                    {/* loggedInUser = Elon */}
                    <Header />
                    {/* </UserContext.Provider> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/cart",
                element: <Cart />,
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
