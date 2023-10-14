import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";
import { ObjectId } from "mongoose";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getUserById(id: ObjectId): Promise<User>;
    getUsers(): Promise<User[]>;
    createUser(email: string, age: number): Promise<User>;
    updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User>;
    deleteUser(id: ObjectId): Promise<User>;
}
