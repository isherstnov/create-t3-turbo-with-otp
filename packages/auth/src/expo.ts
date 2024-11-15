import { createAuthClient } from 'better-auth/react'
import { expoClient } from '@better-auth/expo/client'
import { env } from '../env'


export const authClient = createAuthClient({
  plugins: [
    expoClient({
      scheme: "createt3turbowithotp",
      storagePrefix: "createt3turbowithotp",
    }),
  ],
  baseURL: env.BETTER_AUTH_URL,
})

export const { signIn, signOut } = authClient