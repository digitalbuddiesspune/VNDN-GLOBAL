import { createRoleMiddleware } from "@vndn/shared/middleware/roleMiddleware";

export const middleware = createRoleMiddleware("content_manager", "/dashboard");

export const config = {
  matcher: ["/dashboard/:path*"],
};
