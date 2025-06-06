import { Entity, BaseEntity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Person } from './utils/Person'

@Entity('client')
export class Client extends Person {
    @Column ({
        default: true,
        name: "active"
    })
    isActive: boolean;

    @Column({
        type: "simple-json",
        nullable: true
    })
    additionalInfo: {
        age: number;
        weight: number;
    }

    @Column({
        type: "simple-array",
        nullable: true
    })
    familyMembers: string[];

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedDate: Date;
}