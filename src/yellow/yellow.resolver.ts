import { Query } from '@nestjs/common';
import { Args, Resolver } from '@nestjs/graphql';
import { Color } from './graphql/types/color.type';
import { YellowService } from './yellow.service';

@Resolver()
export class YellowResolver {
  constructor(
      private yelloService: YellowService,
  ) {}

  public async createColor(
    @Args('input') createColor: CreateColor,
  ): Promise<Color> {
    return this.yelloService.createColor(createColor);
  }

  @Query(return => [Color])
  public async getAllColors(){}
}
