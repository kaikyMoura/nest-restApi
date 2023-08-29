import { Injectable } from '@nestjs/common'
import { Usuario } from '../domain/usuario.domain'

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[]

  findAll(): Usuario[] {
    return this.usuarios
  }
}
