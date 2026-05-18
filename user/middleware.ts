import { createRoleMiddleware } from "@vndn/shared/middleware/roleMiddleware";

export const middleware = createRoleMiddleware("user", "/account");

export const config = {
  matcher: ["/account/:path*"],
};
