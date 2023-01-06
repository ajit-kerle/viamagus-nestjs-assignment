import { IsBoolean, IsNotEmpty, IsString,IsArray, IsOptional } from "class-validator";
import {ObjectID} from 'typeorm'


export class CreateTaskDto {

    @IsString()
    @IsNotEmpty()
    description:string;

    @IsString()
    due_date:Date;

    @IsArray()
    @IsOptional() 
    assignee:[{   
        member_id:ObjectID;
        member_name:string;
    }];

    @IsBoolean()
    status: boolean;
}
