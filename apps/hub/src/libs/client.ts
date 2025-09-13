import type { JsonifiedClient } from '@orpc/openapi-client';
import type { ContractRouterClient } from '@orpc/contract';
import { createORPCClient } from '@orpc/client';
import { OpenAPILink } from '@orpc/openapi-client/fetch';
import { contract } from '@enterprise/contracts';

const link = new OpenAPILink(contract, {
  url: 'http://localhost:3000/api',
  headers: () => ({
    'x-api-key': 'my-api-key',
  }),

  // fetch: <-- polyfill fetch if needed
});

export const client: JsonifiedClient<ContractRouterClient<typeof contract>> =
  createORPCClient(link);
