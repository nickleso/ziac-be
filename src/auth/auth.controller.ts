import { Controller, Get } from '@nestjs/common';
import { AuthService } from './providers/auth.service';

@Controller('auth')
export class AuthController {
  /*
   * Injecting Auth Service
   */
  constructor(private readonly authService: AuthService) {}

  //   @Get()
  //   loginUser(): string {
  //     return this.authService.login();
  //   }
}
