import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Range {
  @Field(() => ID)
  id!: number;

  @Field()
  name!: string;
}
