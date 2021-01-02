import { Field, InputType, Int } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { GraphQLSortOperation } from 'src/common/gql-to-mongo/operations/sort';
import { IBaseGraphqlFilterInput } from 'src/common/interfaces/base-graphql-filter-input.interface';

@InputType()
export class FilterInput implements IBaseGraphqlFilterInput {
  @Field((type) => Int, { nullable: true })
  start: number;

  @Field((type) => Int, { nullable: true })
  limit: number;

  @Field((type) => GraphQLJSON, { nullable: true })
  sort: Record<string, GraphQLSortOperation>;

  @Field((type) => GraphQLJSON, { nullable: true })
  where: Record<string, any>;
}
