import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, ValidateIf } from 'class-validator';

@InputType()
export class CreateUserInput {
  @ValidateIf((object) => !!object.email)
  @IsEmail()
  @Field(() => String)
  email: string;
}
