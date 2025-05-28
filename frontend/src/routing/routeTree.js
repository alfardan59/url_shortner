import { createRootRoute } from "@tanstack/react-router"
import RootLayout from "../RootLayout"
import { dashboardRoute } from "./dashboard"
import { authRoute } from "./auth.route"
import { homePageRoute } from "./homepage"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree=rootRoute.addChildren([
    homePageRoute,authRoute,dashboardRoute
])


