import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../createUserDto";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class UserSignUpService {
    constructor(
        @InjectRepository(User) 
        private usersRepository: Repository<User>, 
    ) {}

    async createUser(createUserDto: CreateUserDto) {
        const {fullName, password, email, phoneNumber} = createUserDto;

        const newUser = this.usersRepository.create({
            fullName, 
            password,
            email,
            phoneNumber
        })

        await this.usersRepository.save(newUser);
        return newUser;
    }
} 