import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/typeorm/entities/User";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/CraeteUser.dto";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly usersRepository: Repository<User>,
    ) {}

    async createUser(createUserDto: CreateUserDto) {
        const newUser = await this.usersRepository.create(createUserDto);
        return this.usersRepository.save(newUser);
    }

    getUserById(userId: string) {
        return this.usersRepository.findOne({
          where: { id: userId },
          relations: ['payments'],
        });
    }
}
