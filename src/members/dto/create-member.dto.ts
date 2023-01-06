import { IsNotEmpty, IsString, IsOptional, IsEmail } from "class-validator";
export class CreateMemberDto {
   
   
    @IsString()
    @IsNotEmpty()
    member_name: string

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

    @IsString()
    @IsOptional()
    task_desc?:string
    
    @IsString()
    @IsOptional()
    team_name?:string
}
