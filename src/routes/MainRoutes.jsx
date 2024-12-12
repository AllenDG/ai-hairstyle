import HomeLayout from "@/components/layouts/HomeLayout";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import HairStyle from "@/pages/HairStyle";
import LandingPage from "@/pages/LandingPage";
import LoginPage from "@/pages/LoginPage";
import PageNotFound from "@/pages/PageNotFound";
import RegisterPage from "@/pages/RegisterPage";
import { createBrowserRouter } from "react-router-dom";

export const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: <PageNotFound />,
  },

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "hairstyle-ai",
        element: <HairStyle />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);
