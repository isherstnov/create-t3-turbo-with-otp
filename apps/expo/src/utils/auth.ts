import { createAuthClient } from 'better-auth/react'
import { emailOTPClient } from "better-auth/client/plugins";
import { expoClient } from '@better-auth/expo/client'

export const EXPO_STORAGE_PREFIX = 'createt3turbowithotp';

export const authClient = createAuthClient({
    plugins: [
    expoClient({
      scheme: "createt3turbowithotp",
      storagePrefix: EXPO_STORAGE_PREFIX,
    }),
    emailOTPClient(),
    ],
    baseURL: "http://localhost:3000",
    disableDefaultFetchPlugins: true,
})

export const { signIn, signOut } = authClient