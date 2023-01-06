import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @IsString()
    @IsOptional()
    description?:string;

    @IsString()
    @IsOptional() 
    due_date?:Date;
    
    @IsBoolean()
    @IsOptional() 
    status?: boolean;

}
