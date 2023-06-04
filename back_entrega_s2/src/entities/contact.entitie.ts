import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Client } from "./client.entitie";

@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column({ unique: true })
    email: string

    @Column({ unique: true })
    phone: string

    @CreateDateColumn({ type: 'date' })
    createdAt: string

    @ManyToOne(() => Client, { onDelete: 'CASCADE' })
    @JoinColumn()
    client: Client
}

export { Contact }