import { EntityRepository, Repository } from "typeorm";
import { Usuario } from "../domain/usuario.domain";

@EntityRepository(Usuario)
export class UsuarioRepository extends Repository<Usuario> {
}
