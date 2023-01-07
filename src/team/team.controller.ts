import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { ObjectID } from 'typeorm';
@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body(ValidationPipe) createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll() {
    return this.teamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectID) {
    return this.teamService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectID, @Body(ValidationPipe) updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(id, updateTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectID) {
    return this.teamService.remove(id);
  }
}
