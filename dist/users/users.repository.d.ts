import { FilterQuery, Model, ObjectId } from "mongoose";
import { User, UserDocument } from "./schemas/user.schema";
export declare class UsersRepository {
    userModel: Model<UserDocument>;
    constructor(userModel: Model<UserDocument>);
    findOne(id: ObjectId): Promise<User>;
    find(usersFilterQuery: FilterQuery<User>): Promise<User[]>;
    create(user: User): Promise<User>;
    findOneAndUpdate(userFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User>;
    findOneandDelete(dbid: ObjectId): Promise<User>;
}
