import type { AppRouter } from '../../../api/src/trpc/router';

import { createTRPCProxyClient, httpLink } from '@trpc/client';

const httpLinkClient = httpLink({
  url: 'http://localhost:3000/trpc',
  fetch(url, options) {
    return fetch(url, { ...options, credentials: 'include' });
  },
});

export const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [httpLinkClient],
});
