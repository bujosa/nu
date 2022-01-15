import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IBaseEntity } from 'src/common/interfaces/base-entity.interface';
import { IHouse } from 'src/house/interfaces/house-entity.interface';
import { Color } from 'src/yellow/graphql/types/color.type';

@ObjectType()
export class House implements IHouse, IBaseEntity {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: string;

  @Field()
  updatedAt: string;

  @Field()
  deleted: boolean;

  @Field()
  name: string;

  @Field(() => Int)
  rooms: number;

  @Field(() => Color)
  color: Color;
}
