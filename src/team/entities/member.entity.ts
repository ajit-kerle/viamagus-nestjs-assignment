import {  Column } from "typeorm"


export class Member {

    @Column()
    member_name: string

    @Column()
    task_desc:string
}