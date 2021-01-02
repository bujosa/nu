import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Color } from './database/color.entity';
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
      this.logger.error(`${JSON.stringify(error)}`);
      throw error;
    }
  }

  public async getAllBrands(filterInput: FilterInput): Promise<Brand[]> {
    try {
      this.logger.log(getEntitiesLog(Brand.name, filterInput));

      const query = gqlToMongoQueryBuilder(filterInput, this.brandModel);

      const result: Brand[] = await query.exec();

      return result;
    } catch (error) {
      this.logger.error(`${JSON.stringify(error)}`);
      throw error;
    }
  }

  public async createBrand(createBrandInput: CreateBrandInput): Promise<Brand> {
    try {
      this.logger.log(createEntityLog(Brand.name, createBrandInput));
      const { name } = createBrandInput;

      const slug = generateSlug(name);

      const brand = new this.brandModel({
        name,
        slug,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });

      return brand.save();
    } catch (error) {
      this.logger.error(`${JSON.stringify(error)}`);
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
