import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/Layouts/Layout"
import ErrorPage from "../pages/ErorrPage"
import GameDetailPage from "../pages/GameDetailPage"
import HomePage from "../pages/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
])

export default router
