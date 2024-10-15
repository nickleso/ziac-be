import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  public login(email: string, password: string) {
    return 'user login';
  }

  public register(email: string, password: string) {
    return 'user register';
  }
}
