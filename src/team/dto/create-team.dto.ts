import { IsArray, IsString } from "class-validator";
import {ObjectID} from 'typeorm'
import { Member } from "../entities/member.entity";

export class CreateTeamDto {
    
    @IsString()
    team_name:string;

    @IsArray()
    members:[{   
        member_id:ObjectID;
        member_name:string
    }];
}
