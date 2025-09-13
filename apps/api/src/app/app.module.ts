import { Module } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { onError, ORPCModule } from '@orpc/nest';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetController } from './planet.controller';
import { CoreModule } from '../core/core.module';

@Module({
  imports: [
    ORPCModule.forRootAsync({
      // or .forRoot
      useFactory: (request: Request) => ({
        interceptors: [
          onError((error) => {
            console.error(error);
          }),
        ],
        context: { request }, // oRPC context, accessible from middlewares, etc.
        eventIteratorKeepAliveInterval: 5000, // 5 seconds
      }),
      inject: [REQUEST],
    }),
    CoreModule,
  ],
  controllers: [AppController, PlanetController],
  providers: [AppService],
})
export class AppModule {}
