import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntryNotFoundException } from 'src/common/errors/erros';
import { gqlToMongoQueryBuilder } from 'src/common/gql-to-mongo/graphql-to-mongo-query.util';
import { FilterInput } from 'src/common/graphql/inputs/graphql-filter.input';
import { Color } from './database/color.entity';
import { CreateColorInput } from './graphql/inputs/create-color.input';
import { GetColorByIdInput } from './graphql/inputs/get-color-by-id.input';

@Injectable()
export class YellowService {
  constructor(
    @InjectModel(Color.name) private readonly colorModel: Model<Color>,
  ) {}

  public async getColorById(
    getColorByIdInput: GetColorByIdInput,
  ): Promise<Color> {
    try {
      const result = await this.colorModel.findOne(getColorByIdInput).exec();

      if (!result) {
        throw new EntryNotFoundException();
      }

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async getAllColors(filterInput: FilterInput): Promise<Color[]> {
    try {
      const query = gqlToMongoQueryBuilder(filterInput, this.colorModel);

      const result: Color[] = await query.exec();

      return result;
    } catch (error) {
      throw error;
    }
  }

  public async createColor(createColorInput: CreateColorInput): Promise<Color> {
    try {
      const { name } = createColorInput;

      const color = new this.colorModel({
        name,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      return color.save();
    } catch (error) {
      throw error;
    }
  }

  public async updateBrand(updateBrandInput: UpdateBrandInput): Promise<Brand> {
    try {
      const { data, where } = updateBrandInput;

      const { name } = data;
      const slug = generateSlug(name);

      const updateBrand = {
        name,
        slug,
        updatedAt: new Date().toISOString(),
      };

      const result = await this.brandModel
        .findOneAndUpdate(where, updateBrand, {
          useFindAndModify: false,
        })
        .exec();

      if (!result) {
        throw new EntryNotFoundException();
      }

      return result;
    } catch (error) {
      this.logger.error(`${JSON.stringify(error)}`);
      throw error;
    }
  }
}
