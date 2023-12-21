import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "../createUserDto";
import { UserSignUpService } from "./userSignUp.service";

@Controller('users')
export class UserSignUpController {
    constructor(private readonly userSignUpService: UserSignUpService) {}

    @Post('signUp')
    async registerUser(@Body() createUserDto: CreateUserDto) {
        const user = await this.userSignUpService.createUser(createUserDto);
        return user;
    }
}