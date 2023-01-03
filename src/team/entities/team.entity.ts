import { type, } from "os"
import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"
import { Member } from "./member.entity"

@Entity()
export class Team {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    team_name: string

    @Column()
    member_count:number

    @Column()
    members:Member[]
}