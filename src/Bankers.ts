import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"


@Entity('bankers')
export class Banker extends BaseEntity {
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

    @Column ({
        default: true,
        name: "active"
    })
    isActive: boolean;

    @Column({
        unique: true,
        length: 10
    })
    employeeNo: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}