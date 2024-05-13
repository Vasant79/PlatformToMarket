import LandingPage from "./pages/LandingPage";
import SuccessPage from "./pages/SuccessPage";
import RegisterationPage from "./pages/RegisterationPage";

const publicRoutes = [
  { path: "/", element: <LandingPage /> },
  { path: "/home", element: <LandingPage /> },
  {
    path: "/success",
    element: <SuccessPage />,
  },
  {
    path: "/registeration",
    element: <RegisterationPage />,
  },
];

export { publicRoutes };
