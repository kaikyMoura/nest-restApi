import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Usuario } from './usuario.domain'

@Entity()
export class Contato {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    numero: string

    @ManyToOne(()=> Usuario)
    @JoinColumn({ name: 'user_id'})
    usuario: Usuario
  
    constructor(email: string, numero: string, usuario: Usuario) {
      this.email = email
      this.numero = numero
      this.usuario = usuario
    }
}
