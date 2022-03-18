import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeInput } from './dto/create-recipe.input';
import { UpdateRecipeInput } from './dto/update-recipe.input';

@Injectable()
export class RecipeService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createRecipeInput: CreateRecipeInput) {
    return this.prismaService.recipe.create({
      data: createRecipeInput,
    });
  }

  findAll() {
    return this.prismaService.recipe.findMany();
  }

  findOne(id: string) {
    return this.prismaService.recipe.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateRecipeInput: UpdateRecipeInput) {
    const data = updateRecipeInput;
    delete data.id;
    return this.prismaService.recipe.update({
      where: {
        id,
      },
      data,
    });
  }

  remove(id: string) {
    return this.prismaService.recipe.delete({
      where: {
        id,
      },
    });
  }
}
