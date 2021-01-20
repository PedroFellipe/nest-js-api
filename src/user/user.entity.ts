import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User
{
    @PrimaryGeneratedColumn()
    id: Number;

    @Column({
        length:255
    })
    name: String;

    @Column({
        length: 255
    })
    email: String;
}