import {  Column,ObjectIdColumn,ObjectID } from "typeorm"


export class Member {
    
    @ObjectIdColumn()
    id: ObjectID

    @Column()
    member_name: string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    task_desc:string

    @Column()
    team_name:string
}