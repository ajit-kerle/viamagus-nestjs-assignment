import { Entity, ObjectID, ObjectIdColumn, Column } from "typeorm"

@Entity()
export class Task {
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    description: string

    @Column()
    due_date: Date

    @Column()
    assignee: string

    @Column({ default: false })
    status: boolean;
}