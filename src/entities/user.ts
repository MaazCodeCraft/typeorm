import { Column, Entity, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Photo {
    @PrimaryGeneratedColumn ()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column("text")
    description: string

    @Column()
    filename: string

    @Column("double")
    view: number

    @Column()
    isPublished: boolean
}