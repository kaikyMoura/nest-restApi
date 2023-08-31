import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controller/usuario.controller';
import { UsuarioService } from 'src/service/usuario.service';
import { Usuario } from "../domain/usuario.domain";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}