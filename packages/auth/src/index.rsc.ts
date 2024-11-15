import { cache } from "react";
import { headers } from "next/headers";

import { auth } from "./auth";

export const getSession = cache(async () => {
  const newHeaders = new Headers();

  const obtainedHeaders = headers();

  // Copy all headers from obtainedHeaders to newHeaders
  obtainedHeaders.forEach((value, key) => {
    newHeaders.set(key, value);
  });

  const cookieHeaders = obtainedHeaders.get("Cookie");

  // Handle Expo cookie format
  if (cookieHeaders?.startsWith("{")) {
    try {
      const parsedCookies = JSON.parse(cookieHeaders) as Record<string, { value: string }>;

      const sessionToken = parsedCookies["better-auth.session_token"];

      if (sessionToken?.value) {
        newHeaders.set(
          "Cookie",
          `better-auth.session_token=${sessionToken.value}`,
        );
      }
    } catch (e) {
      console.error("Error parsing cookie:", e);
    }
  }

  return auth.api.getSession({
    headers: newHeaders,
  });
});

export * from "./auth";