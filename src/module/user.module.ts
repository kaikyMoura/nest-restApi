import { Module } from '@nestjs/common';
import { UsuarioController } from 'src/controller/usuario.controller';
import { UsuarioService } from 'src/service/usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
})
export class UsuarioModule {}