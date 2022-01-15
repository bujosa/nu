import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { ICreateHouseInput } from 'src/house/interfaces/create-house-input.interface';

@InputType()
export class CreateHouseInput implements ICreateHouseInput {
  @Field()
  name: string;

  @Field(() => ID)
  color: string;

  @Field(() => Int)
  rooms: number;
}
