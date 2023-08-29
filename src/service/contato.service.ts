import { Injectable } from '@nestjs/common'
import { UsuarioService } from './usuario.service'

@Injectable()
export class ContatoService {
  id: number
  email: string
  numero: string
  user_id: UsuarioService

  constructor(email: string, numero, user_id: UsuarioService) {
    this.email = email
    this.numero = numero
    this.user_id = user_id
  }
}
