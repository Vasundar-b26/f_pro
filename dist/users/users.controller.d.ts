import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';
import { ObjectId } from 'mongoose';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUser(userId: ObjectId): Promise<User | any>;
    DeleteOne(userId: ObjectId): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User>;
}
