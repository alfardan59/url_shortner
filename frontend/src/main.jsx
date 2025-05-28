import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouteProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routing/routeTree";
import store from "./store/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();
const router = createRouter({
  routeTree,
});

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <RouteProvider router={router} />
    </QueryClientProvider>
  </Provider>
);
