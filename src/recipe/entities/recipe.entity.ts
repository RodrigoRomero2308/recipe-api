import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Recipe {
  @Field(() => String, { description: 'Unique ID' })
  id: string;

  @Field(() => String, { description: 'Name of the recipe' })
  name: string;

  @Field(() => Int, { description: 'Difficulty of the recipe' })
  difficulty: number;
}
