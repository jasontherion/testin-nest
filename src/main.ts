import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // 👈 para evitar que se envien objetos dentro de la solicitud que no existan
      whitelist: true,
      forbidNonWhitelisted: true
    }),
  );
await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
