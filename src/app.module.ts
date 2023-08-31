import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { Usuario } from "./domain/usuario.domain";
import { Contato } from "./domain/contato.domain";
import { DataSource } from "typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'xxxx',
      database: 'db_accounts2',
      entities: [Usuario, Contato],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {
  // constructor(private readonly dataSource: DataSource) {
  //   this.dataSource = dataSource;
  // }

}
