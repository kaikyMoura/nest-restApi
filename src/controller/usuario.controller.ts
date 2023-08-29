import { Controller, Get } from "@nestjs/common";
import { UsuarioService } from "../service/usuario.service";
import { Usuario } from "../domain/usuario.domain";

@Controller('usuarios')
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) {
    this.usuarioService = usuarioService
  }
  
  @Get()
  findAll(): Usuario[] {
    return this.usuarioService.findAll()
}

}
