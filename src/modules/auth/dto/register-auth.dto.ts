import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";
import { LoginAuthDto } from "./login-auth.dto";
import { IsNotEmpty } from "class-validator";


export class RegisterAuthDto extends PartialType(LoginAuthDto){
    @IsNotEmpty()
    name: string;
}