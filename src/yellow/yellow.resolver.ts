import { Query } from '@nestjs/common';
import { Args, Resolver } from '@nestjs/graphql';
import { CreateColorInput } from './graphql/inputs/create-color.input';
import { Color } from './graphql/types/color.type';
import { YellowService } from './yellow.service';

@Resolver()
export class YellowResolver {
  constructor(
      private yelloService: YellowService,
  ) {}

  public async createColor(
    @Args('input') createColorInput: CreateColorInput,
  ): Promise<Color> {
    return this.yelloService.createColor(createColorInput);
  }

  @Query(return => [Color])
  public async getAllColors(){}
}
