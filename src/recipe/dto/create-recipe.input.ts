import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRecipeInput {
  @Field(() => String, { description: 'Name of the recipe' })
  name: string;

  @Field(() => Int, { description: 'Difficulty of the recipe' })
  difficulty: number;
}
