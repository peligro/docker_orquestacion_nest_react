import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    //habilitar CORS
    app.enableCors({
      origin: 'http://localhost:3000', // Dominio público del frontend
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true, // Permite el envío de cookies o encabezados de autenticación
      allowedHeaders: ['Content-Type', 'Authorization'], // Headers permitidos
    });
   //configurar prefijo global
   app.setGlobalPrefix('api/');
  await app.listen(process.env.CURSO_SERVER_PORT);
}
bootstrap();
