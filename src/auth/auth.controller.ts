import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './providers/auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  /*
   * Injecting Auth Service
   */
  constructor(private readonly authService: AuthService) {}

  // @Get()
  //   @Body(email: string, password: string)
  // loginUser(): string {
  //   return this.authService.login(email: string, password: string);
  // }
}
