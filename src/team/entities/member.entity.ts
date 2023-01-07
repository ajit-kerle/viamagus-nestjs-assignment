import { ObjectID, Column,ObjectIdColumn,Entity } from "typeorm"



export class Member {
    // @ObjectIdColumn()
    
    member_id: ObjectID

    member_name:string
}