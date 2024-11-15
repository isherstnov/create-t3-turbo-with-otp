import { cache } from "react";

import { auth } from "./auth";
``
export const getSession = cache(async (headers: Headers) => {
  return auth.api.getSession({ headers });
});

export * from "./auth";