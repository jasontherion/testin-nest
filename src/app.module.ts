import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { Cofees2Module } from './cofees2/cofees2.module';

@Module({
  imports: [Cofees2Module, TypeOrmModule.forRoot({
    type: 'postgres',
    url: "postgresql://neondb_owner:npg_vnPC9iW5hFKI@ep-damp-tooth-a46hsa3b-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require", // Tu Connection URI de Neon
    autoLoadEntities: true,
    synchronize: true, // solo dejar esta opcion en tru en desarrollo no en produccion
    ssl: {
      rejectUnauthorized: false, // Ajusta según las recomendaciones de Neon
    },
  }),],

  controllers: [AppController, CoffeesController],
  providers: [AppService, CoffeesService],
})
export class AppModule { }
