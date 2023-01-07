import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Task } from './entities/task.entity';
import { ObjectID } from "typeorm"
import { Member } from 'src/team/entities/member.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository:MongoRepository<Task>,
  ){}

  create(createTaskDto: CreateTaskDto) {
    // console.log(createTaskDto)
    let task:Task=new Task()
    task.description=createTaskDto.description
    task.due_date=createTaskDto.due_date

    let member : Member =new Member()
    let members=[]
    
    for(let obj of createTaskDto.assignee){
        member.member_name=obj.member_name
        member.member_id=obj.member_id
        members.push(member)
    }
    task.assignee=members
    task.status=createTaskDto.status
    return this.taskRepository.save(task)
  }

  findAll() {
    return this.taskRepository.find()
  }

  findOne(id:ObjectID) {
    // console.log(id)
    return this.taskRepository.findOne({where:{id:id}})
  }

  update(id: ObjectID, updateTaskDto: UpdateTaskDto) {
    let task:Task=new Task()
    task.description=updateTaskDto.description
    task.due_date=updateTaskDto.due_date
    task.status=updateTaskDto.status
    return this.taskRepository.update(id,task)
  }

  remove(id: ObjectID) {
    return this.taskRepository.delete(id)
  }
}
