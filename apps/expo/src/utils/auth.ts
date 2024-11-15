import { createAuthClient } from 'better-auth/react'
import { emailOTPClient } from "better-auth/client/plugins";
import { expoClient } from '@better-auth/expo/client'


export const authClient = createAuthClient({
    plugins: [
    expoClient({
      scheme: "createt3turbowithotp",
      storagePrefix: "createt3turbowithotp",
    }),
    emailOTPClient(),
    ],
    baseURL: "http://localhost:3000",
    disableDefaultFetchPlugins: true,
})

export const { signIn, signOut } = authClient