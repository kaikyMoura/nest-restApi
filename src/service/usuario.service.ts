import { Injectable } from '@nestjs/common'
import { Usuario } from '../domain/usuario.domain'
import { UsuarioRepository } from "../repository/usuario.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { getRepository, Repository } from "typeorm";

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(UsuarioRepository)
    private readonly usuarioRepository: UsuarioRepository
  ) {
  }
  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
}
