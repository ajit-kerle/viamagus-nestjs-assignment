import { IsArray, IsString } from "class-validator";

export class CreateTeamDto {
    
    @IsString()
    team_name:string;

    @IsArray()
    members:[{   
    
        member_name:string
        task_desc:string
    }];
}
