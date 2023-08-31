import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Contato } from './contato.domain'

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  private id: number
  
  @Column()
  private nome: string
  
  @ManyToMany(()=> Contato)
  contato: Contato

  constructor(nome: string, contato: Contato) {
    this.nome = nome
    this.contato = contato
  }
}
