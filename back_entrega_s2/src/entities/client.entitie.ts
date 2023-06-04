import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from "typeorm";
import { Contact } from "./contact.entitie";

@Entity("clients")
class Client{

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({unique: true})
    email: string
    
    @Column()
    password: string

    @Column({unique: true})
    phone: string

    @CreateDateColumn({type:'date'})
    createdAt: string

    @OneToMany(()=> Contact, contact => contact.client, { cascade: true })
    contact: Contact[]
}

export{Client}