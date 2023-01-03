import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { IsBoolean, IsString } from "class-validator";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {

    @IsString()
    description:string;

    @IsString() 
    due_date:Date;
    
    @IsBoolean()
    status: boolean;

}
