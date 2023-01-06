import { Injectable } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {InjectRepository} from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Member } from './entities/member.entity';


@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member)
    private memberRepository:MongoRepository<Member>,
  ){}
  create(createMemberDto: CreateMemberDto) {
    let member:Member=new Member()

    member.email=createMemberDto.email
    member.member_name=createMemberDto.member_name
    member.password=createMemberDto.password
    member.task_desc=createMemberDto.task_desc
    member.team_name=createMemberDto.team_name

    return this.memberRepository.save(member)
  }

  findAll() {
    return `This action returns all members`;
  }
  
  login(){
     return `login api here`
   }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
