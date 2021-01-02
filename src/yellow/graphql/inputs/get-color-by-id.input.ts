import { Field, InputType } from '@nestjs/graphql';
import { IGetColorByIdInput } from 'src/yellow/interfaces/get-color-by-id-input.interface';

@InputType()
export class GetColorByIdInput implements IGetColorByIdInput {
  @Field()
  id: string;
}
