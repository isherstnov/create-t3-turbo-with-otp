import { createAuthClient } from 'better-auth/client'
import { NextRequest, NextResponse } from 'next/server';

export const client = createAuthClient();

export async function authMiddleware(request: NextRequest) {
    /**
     * This is an example of how you can use the client to get the session
     * from the request headers.
     * 
     * You can then use this session to make decisions about the request
     */
    // const { data: session } = await client.getSession({
    //     fetchOptions: {
    //         headers: {
    //             cookie: request.headers.get('cookie') || ""
    //         }
    //     }
    // })
    return NextResponse.next();
}