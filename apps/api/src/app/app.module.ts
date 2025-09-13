import { Module } from '@nestjs/common';
import { onError, ORPCModule } from '@orpc/nest';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlanetController } from './planet.controller';
import { REQUEST } from '@nestjs/core';

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
  ],
  controllers: [AppController, PlanetController],
  providers: [AppService],
})
export class AppModule {}
