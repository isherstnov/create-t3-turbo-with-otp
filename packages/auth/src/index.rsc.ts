import { cache } from "react";
import { headers } from "next/headers";

import { auth } from "./auth";

export const getSession = cache(async () => {
  const obtainedHeaders = headers();

  return auth.api.getSession({
    headers: obtainedHeaders,
  });
});

export * from "./auth";
