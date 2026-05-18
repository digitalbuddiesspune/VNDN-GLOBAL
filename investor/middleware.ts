import { createRoleMiddleware } from "@vndn/shared/middleware/roleMiddleware";

export const middleware = createRoleMiddleware("investor", "/dashboard");

export const config = {
  matcher: ["/dashboard/:path*"],
};
