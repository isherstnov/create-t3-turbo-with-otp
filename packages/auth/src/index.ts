import { auth } from "./auth";

export const getSession = async (headers: Headers) => {
    return auth.api.getSession({
        headers
    });
};

export * from "./auth";