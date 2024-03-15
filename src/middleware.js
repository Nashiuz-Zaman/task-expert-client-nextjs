// next
import { NextResponse } from 'next/server';

// data
import { serverUrl } from './uiData/serverUrl';

// This function can be marked `async` if using `await` inside
export const middleware = async request => {
   const queryParams = request.nextUrl.searchParams;
   const id = queryParams?.get('id');

   if (!id) {
      return NextResponse.redirect(new URL('/', request.url));
   }

   const res = await fetch(`${serverUrl}/route?id=${id}`, {
      cache: 'no-store',
   });

   const data = await res.json();

   if (data.status === 'failed') {
      return NextResponse.redirect(new URL('/', request.url));
   }

   return NextResponse.next();
};

export const config = {
   matcher: ['/manage-tasks', '/settings', '/analytics'],
};
