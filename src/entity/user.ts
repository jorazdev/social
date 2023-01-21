
import { Timestamp } from "../generics/timestamp";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Exclude } from 'class-transformer';
import { UserEnum } from "src/enums/user.enum";

@Entity()
export class User extends Timestamp{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
        nullable: true,
        default: ''
    })
    email: string;

    @Column({
        nullable: false,
        default: ''
    })
    identity: string

    @Column({
        nullable: false,
        default: ''
    })
    password?: string

    @Exclude()
    @Column({
        nullable: false,
        default: false
    })
    active: boolean

    @Column({
        type: 'enum',
        default: UserEnum.USER,
        enum: UserEnum
    })
    role: string

    @Column({
        nullable: true,
        default: '',
        length: 3000
    })
    token: string

    @Column({
        nullable: true,
        default: ''
    })
    firstName: string

    @Column({
        nullable: true,
        default: ''
    })
    lastName: string

    @Column({
        type: 'text',
        nullable: true
    })
    contact: string

    @Column({
        type: 'text',
        nullable: true
    })
    address: string


}