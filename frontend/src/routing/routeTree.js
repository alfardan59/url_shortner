import { createRootRoute } from "@tanstack/react-router"

import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: RootLayout
})

export const routeTree =rootRoute.addChildren([
   
])
