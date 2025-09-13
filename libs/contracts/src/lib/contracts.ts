import { populateContractRouterPaths } from '@orpc/nest';
import { oc } from '@orpc/contract';
import * as z from 'zod';

export const PlanetSchema = z.object({
  id: z.coerce.number().int().min(1),
  name: z.string(),
  description: z.string().optional(),
});

export const listPlanetContract = oc
  .route({
    method: 'GET',
    path: '/planets', // Path is required for NestJS implementation
  })
  .input(
    z.object({
      limit: z.number().int().min(1).max(100).optional(),
      cursor: z.number().int().min(0).default(0),
    })
  )
  .output(z.array(PlanetSchema));

export const findPlanetContract = oc
  .route({
    method: 'GET',
    path: '/planets/{id}', // Path is required
  })
  .input(PlanetSchema.pick({ id: true }))
  .output(PlanetSchema);

export const createPlanetContract = oc
  .route({
    method: 'POST',
    path: '/planets', // Path is required
  })
  .input(PlanetSchema.omit({ id: true }))
  .output(PlanetSchema);

/**
 * populateContractRouterPaths is completely optional,
 * because the procedure's path is required for NestJS implementation.
 * This utility automatically populates any missing paths
 * Using the router's keys + `/`.
 */
export const contract = populateContractRouterPaths({
  planet: {
    list: listPlanetContract,
    find: findPlanetContract,
    create: createPlanetContract,
  },
});
