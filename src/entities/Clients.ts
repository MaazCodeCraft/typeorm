import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm"


@Entity('client')
export class Client extends BaseEntity {
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
        type: "simple-json",
        nullable: true
    })
    additionalInfo: {
        age: number;
        weight: number;
    }
    /*
    @Column({
        type: "simple-array",
        default: []
    }) 
    familyMembers: string [];
    */
}