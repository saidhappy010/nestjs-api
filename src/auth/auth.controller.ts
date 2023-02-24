import { AuthDto } from './dto';
import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
  constructor(private authService:AuthService){}

  @Post('signup')
  signup(@Body() dto: AuthDto){     
    return this.authService.sigup(dto)
  }

  @Post('signin')
  signin(){
    return this.authService.signin()
  }
}