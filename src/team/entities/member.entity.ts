import { ObjectID, Column } from "typeorm"



export class Member {
    @Column()
    member_id: ObjectID

    @Column()
    member_name:string
}