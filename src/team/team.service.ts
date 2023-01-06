import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Team } from './entities/team.entity';
import { Member } from './entities/member.entity';
import { ObjectID } from "typeorm"

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository:MongoRepository<Team>,
  ){}

  create(createTeamDto: CreateTeamDto) {
    

    let team: Team=new Team()
    team.team_name=createTeamDto.team_name
    
    let member : Member =new Member()
    let members=[]
    
    for(let obj of createTeamDto.members){
        member.member_name=obj.member_name
        member.member_id=obj.member_id
        members.push(member)
    }
    team.members=members
    team.member_count=team.members.length
    return this.teamRepository.save(team)
  }

  // find all team with member
  findAll() {
    return this.teamRepository.find()
  }

  // findOne(id: number) {
  //   console.log(id)
  //   return this.teamRepository.findOne(id)
  // }

  update(id: number, updateTeamDto: UpdateTeamDto) {
    return "update api in team category"
  }

  remove(id: number) {
    return `This action removes a #${id} team`;
  }
}
