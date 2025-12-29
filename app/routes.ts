import type { RouteConfig } from "@react-router/dev/routes";
import { index, layout, route } from "@react-router/dev/routes";

export default [
  layout("layouts/sidebar.tsx", [
    index("routes/home.tsx"),
    route("contacts/:contactId", "routes/contact.tsx"),
    route("contacts/:contactId/edit", "routes/edit-contact.tsx"),
    route("contacts/:contactId/destroy", "routes/destroy-contact.tsx"),
  ]),
  // if wanted: introduce file-system routing conventions like in next.js
  // by introducing ...(await flatRoutes())
  route("/tasks", "routes/tasks/index.tsx"),
  route("/product", "routes/product.tsx"),
] satisfies RouteConfig;
