import {
    createBrowserRouter,
} from "react-router-dom";
import LandingPage from "../layouts/LandingPage";
import ProjectDetails from "../features/ProjectDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage></LandingPage>,
    },
    {
        path: "/projects/:id",
        element: <ProjectDetails></ProjectDetails>,
    },
  
]);






export default router;