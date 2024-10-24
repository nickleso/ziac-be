import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { Injectable } from '@nestjs/common';

/**
 * Controller class for '/users' API endpoint
 */
@Injectable()
export class UsersService {
  /**
   * Public method responsible for handling GET request for '/users' endpoint
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limt: number,
    page: number,
  ) {
    return [
      {
        id: 1,
        firstName: 'John',
        email: 'john@doe.com',
      },
      {
        id: 2,
        firstName: 'Alice',
        email: 'alice@doe.com',
      },
    ];
  }

  /**
   * Public method used to find one user using the ID of the user
   */
  public findOneById(id: string) {
    return {
      id: 1,
      firstName: 'Alice',
      email: 'alice@doe.com',
    };
  }
}
