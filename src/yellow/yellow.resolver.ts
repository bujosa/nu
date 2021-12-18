import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateColorInput } from './graphql/inputs/create-color.input';
import { GetColorByIdInput } from './graphql/inputs/get-color-by-id.input';
import { UpdateColorInput } from './graphql/inputs/update-color.input';
import { Color } from './graphql/types/color.type';
import { YellowService } from './yellow.service';

@Resolver(() => Color)
export class YellowResolver {
  constructor(private yelloService: YellowService) {}

  @Query(() => Color)
  public async getColorById(
    @Args('input') getColorByIdInput: GetColorByIdInput,
  ): Promise<Color> {
    return await this.yelloService.getColorById(getColorByIdInput);
  }

  @Mutation(() => Color)
  public async createColor(
    @Args('input') createColorInput: CreateColorInput,
  ): Promise<Color> {
    return await this.yelloService.createColor(createColorInput);
  }

  @Query(() => [Color])
  public async getAllColors(): Promise<Color[]> {
    return await this.yelloService.getAllColors();
  }

  @Mutation(() => Color)
  public async updateBrand(
    @Args('input') updateColorInput: UpdateColorInput,
  ): Promise<Color> {
    return await this.yelloService.updateColor(updateColorInput);
  }
}
