import { IsBoolean, IsString } from "class-validator";
// import { IsDate } from "class-validator/types/decorator/decorators";

export class CreateTaskDto {
    @IsString()
    description:string;

    @IsString() 
    due_date:Date;

    @IsString()
    assignee:string;

    @IsBoolean()
    status: boolean;
}
