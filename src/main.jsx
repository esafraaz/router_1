import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Home from "./Components/Home/Home";
import Users from "./Components/Users/Users";
import UserDetails from "./Components/Users/UserDetails/UserDetails";
import ErrorMsg from "./Components/Error/ErrorMsg";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
    errorElement: <ErrorMsg></ErrorMsg>,
		children: [
			{
				path: "/about",
				element: <About></About>,
			},
			{
				path: "/contact",
				element: <Contact></Contact>,
			},
			{
				path: "/users",
				loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
				element: <Users></Users>,
			},
			{
				path: "/user/:userId",
				loader: ({ params }) =>
					fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
				element: <UserDetails></UserDetails>,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
