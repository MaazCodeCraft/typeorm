import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"


@Entity()
export class Person extends BaseEntity {
    @PrimaryColumn() 
    id: number

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        unique: true
    })
    email: string;

    @Column({
        unique: true,
        length: 10
    })
    cardNo: string;

    @Column({
        type: "numeric"
    })
    balance: number;
}