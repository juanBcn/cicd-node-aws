import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Logger } from '@nestjs/common';

@Injectable()
export class UsersService {
  logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  create(createUserDto: CreateUserDto) {
    this.logger.log('createUserDto: ' + createUserDto);
    return 'This action adds a new user';
  }

  findAll() {
    this.logger.log('findAll users is triggered!');
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    this.logger.log('updateUserDto: ' + updateUserDto);
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
