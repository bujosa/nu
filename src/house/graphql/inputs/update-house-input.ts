import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { IUpdateHouseInput } from 'src/house/interfaces/update-house-input.interface';

@InputType()
export class UpdateHouseInput implements IUpdateHouseInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => ID, { nullable: true })
  color: string;

  @Field(() => Int, { nullable: true })
  rooms: number;
}
