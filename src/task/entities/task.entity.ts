import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"
import { Member } from "src/team/entities/member.entity"

@Entity()
export class Task {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    description: string

    @Column()
    due_date: Date

    @Column()
    assignee: Member[]

    @Column({ default: false })
    status: boolean;
}