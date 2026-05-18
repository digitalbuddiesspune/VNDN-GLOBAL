import { createRoleMiddleware } from "@vndn/shared/middleware/roleMiddleware";

export const middleware = createRoleMiddleware("admin", "/dashboard");

export const config = {
  matcher: ["/dashboard/:path*"],
};
