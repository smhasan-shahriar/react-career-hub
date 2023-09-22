import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "./MainLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import AppliedJobs from "./Pages/AppliedJobs";
import JobDetails from "./Pages/JobDetails";



const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'statistics',
                element: <div>statistics page</div>
            },
            {
                path: 'applied',
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: 'blog',
                element: <div>blog</div>
            },
            {
                path: '/jobs/:id',
                element: <JobDetails></JobDetails>,
                loader: () => fetch('../jobs.json')
            }
        ]
    }
])

export default Router;