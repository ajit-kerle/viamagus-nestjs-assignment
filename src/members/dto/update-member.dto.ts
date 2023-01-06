import { PartialType } from '@nestjs/mapped-types';
import { CreateMemberDto } from './create-member.dto';
import { IsNotEmpty, IsString, IsOptional, IsEmail } from "class-validator";
import { Optional } from '@nestjs/common';

export class UpdateMemberDto extends PartialType(CreateMemberDto) {

    @IsString()
    @Optional()
    member_name: string

    @IsString()
    @Optional()
    email:string

    @IsString()
    @IsOptional()
    password:string

    @IsOptional()
    task_desc?:string

    @IsOptional()
    team_name?:string
}
