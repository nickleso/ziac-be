import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Users } from '../users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 * Controller class for '/users' API endpoint
 */
@Injectable()
export class UsersService {
  constructor(
    /**
     * Injecting User repository into UsersService
     * */
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  public async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: createUserDto.email },
    });

    let newUser = this.usersRepository.create(createUserDto);
    newUser = await this.usersRepository.save(newUser);

    return newUser;
  }

  /**
   * Public method responsible for handling GET request for '/users' endpoint
   */
  public async findAll(
    getUserParamDto: GetUsersParamDto,
    limt: number,
    page: number,
  ) {
    let users = await this.usersRepository.find();

    return users;
  }

  /**
   * Public method used to find one user using the ID of the user
   */
  public async findOneById(getUserParamDto: GetUsersParamDto) {
    return await this.usersRepository.findOneBy({
      id: Number(getUserParamDto.id),
    });
  }
}
