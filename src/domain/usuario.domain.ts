import { ContatoService } from '../service/contato.service'

export class Usuario {
  private id: number
  private nome: string
  contato: ContatoService

  constructor(nome: string, contato: ContatoService) {
    this.nome = nome
    this.contato = contato
  }
}
