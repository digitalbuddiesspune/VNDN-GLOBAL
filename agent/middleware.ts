import { createRoleMiddleware } from "@vndn/shared/middleware/roleMiddleware";

export const middleware = createRoleMiddleware("agent", "/dashboard");

export const config = {
  matcher: ["/dashboard/:path*"],
};
