import { Controller, Get, Post, Body, Patch, Param, Delete,ValidationPipe } from '@nestjs/common';
import { MembersService } from './members.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import {ObjectID} from 'typeorm';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  create(@Body(ValidationPipe) createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get('login')
  lohin(){
    return this.membersService.login();
  }

  @Get(':id')
  findOne(@Param('id') id: ObjectID) {
    return this.membersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: ObjectID, @Body(ValidationPipe) updateMemberDto: UpdateMemberDto) {
    return this.membersService.update(id, updateMemberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ObjectID) {
    return this.membersService.remove(id);
  }
}
