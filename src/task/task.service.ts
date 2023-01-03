import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Task } from './entities/task.entity';

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
    task.assignee=createTaskDto.assignee
    task.status=createTaskDto.status
    return this.taskRepository.save(task)
  }

  findAll() {
    return this.taskRepository.find()
  }

  // findOne(id: number) {
  //   return this.taskRepository.findOne(id)
  // }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    let task:Task=new Task()
    task.description=updateTaskDto.description
    task.due_date=updateTaskDto.due_date
    task.status=updateTaskDto.status
    return this.taskRepository.update(id,task)
  }

  remove(id: number) {
    return this.taskRepository.delete(id)
  }
}
