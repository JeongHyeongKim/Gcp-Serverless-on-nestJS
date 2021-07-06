import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Express from 'express';
import { ExpressAdapter } from "@nestjs/platform-express";


const server = Express();
server.get('/_ah/health', (req,res) => res.send("ok"))

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.listen(3000);
}


bootstrap();
