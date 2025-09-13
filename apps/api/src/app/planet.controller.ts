import { Controller } from '@nestjs/common';
import { Implement, implement, ORPCError } from '@orpc/nest';
import { contract } from '@enterprise/contracts';

@Controller()
export class PlanetController {
  // /**
  //  * Implement a standalone procedure
  //  */
  // @Implement(contract.planet.list)
  // list() {
  //   return implement(contract.planet.list).handler(({ input }) => {
  //     // Implement logic here

  //     return [];
  //   });
  // }

  /**
   * Implement entire contract
   */
  @Implement(contract.planet)
  planet() {
    return {
      list: implement(contract.planet.list).handler(({ input }) => {
        throw new ORPCError('FUCK_YOU');
        // Implement logic here
        return [];
      }),
      find: implement(contract.planet.find).handler(({ input }) => {
        // Implement logic here
        return {
          id: 1,
          name: 'Earth',
          description: 'The planet Earth',
        };
      }),
      create: implement(contract.planet.create).handler(({ input }) => {
        // Implement logic here
        return {
          id: 1,
          name: 'Earth',
          description: 'The planet Earth',
        };
      }),
    };
  }
}
