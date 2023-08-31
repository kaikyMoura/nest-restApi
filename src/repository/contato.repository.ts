import { EntityRepository, Repository } from "typeorm";
import { Usuario } from "../domain/usuario.domain";
import { Contato } from "../domain/contato.domain";

@EntityRepository(Usuario)
export class ContatoRepository extends Repository<Contato> {
}
