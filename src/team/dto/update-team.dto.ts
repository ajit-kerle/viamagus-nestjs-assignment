import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto';
import { IsArray, IsString } from "class-validator";

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
    @IsString()
    team_name:string;

    @IsArray()
    members:[{   
        member_name:string
        task_desc:string
    }];
}
